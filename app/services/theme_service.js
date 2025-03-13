import ThemeApi from '../api/themeApi';
import apiService from './api_service';
import Theme from '../models/Theme';

const itemsPerPage = 20;

const themeService = (() => {
  return {
    syncData
  }

  function syncData(successCallback, failureCallback) {
    console.log('===== Sync theme data ====');
    _syncByPage(1, 1, successCallback, failureCallback)
  }

  async function _syncByPage(page, totalPage, successCallback, failureCallback) {

    console.log(`+++++ page = ${page} | total page = ${totalPage}`);

    if(page > totalPage) {
      console.log('====== finish fetching theme =====');
      !!successCallback && successCallback();
      return;
    }

    const response = await new ThemeApi().load(page);
    // console.log('=== Load theme API response = ', response);
    apiService.handleApiResponse(response, (res) => {

      console.log('=== Load theme API response = ', res);

      const allPage = Math.ceil(res.pagy.count / itemsPerPage);

      console.log('=== theme all page = ', allPage);

      _handleManipulateTheme(res.themes);
      _syncByPage(page+1, allPage, successCallback, failureCallback);
    }, (error) => !!failureCallback && failureCallback());
  }

  function _handleManipulateTheme(themes) {
    themes.map(theme => {
      const savedTheme = Theme.findById(theme.id);
      if (!theme.deleted_at)
        !!savedTheme ? Theme.update(theme.id, theme) : Theme.create(theme);
      else if (!!savedTheme)
        Theme.deleteById(theme.id);
    });
  }
})();

export default themeService;