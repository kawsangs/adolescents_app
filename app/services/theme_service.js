import ThemeApi from '../api/themeApi';
import apiService from './api_service';
import Theme from '../models/Theme';

const itemsPerPage = 20;

const themeService = (() => {
  return {
    syncData
  }

  function syncData(successCallback, failureCallback) {
    _syncByPage(1, 1, successCallback, failureCallback)
  }

  async function _syncByPage(page, totalPage, successCallback, failureCallback) {
    if(page > totalPage) {
      !!successCallback && successCallback();
      return;
    }

    const response = await new ThemeApi().load(page);
    apiService.handleApiResponse(response, (res) => {
      const allPage = Math.ceil(res.pagy.count / itemsPerPage);
      _handleManipulateTheme(res.themes);
      _syncByPage(page+1, allPage, successCallback, failureCallback);
    }, (error) => !!failureCallback && failureCallback());
  }

  function _handleManipulateTheme(themes) {
    themes.map(theme => {
      const savedTheme = Theme.findById(theme.id);
      if (!theme.deleted_at)
        !!savedTheme ? Theme.update(theme.id, theme) : Theme.create(theme);
      else if (!!savedTheme && !!theme.deleted_at)
        Theme.deleteById(theme.id);
    });
  }
})();

export default themeService;