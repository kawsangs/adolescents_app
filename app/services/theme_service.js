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
    // if(page > totalPage) {
    //   !!successCallback && successCallback();
    //   return;
    // }

    const response = await new ThemeApi().load(page);
    console.log('=== Load theme API response = ', response);
  }
})();

export default themeService;