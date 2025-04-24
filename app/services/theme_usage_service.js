import Moment from 'moment';
import ThemeUsage from '../models/ThemeUsage';
import User from '../models/User';
import networkService from './network_service';
import ThemeUsageApi from '../api/themeUsageApi';

const themeUsageService = (() => {
  return {
    recordThemeUsage,
    syncThemeUsages
  }

  function recordThemeUsage(themeId) {
    networkService.checkConnection(() => {
      _sendCreateRequest({theme_id: themeId}, null, () => {
        ThemeUsage.create(themeId);  // if failed to send theme usage to server then save it to realm
      });
    }, () => {
      ThemeUsage.create(themeId);  // if no internet connection save theme usage data to realm
    });
  }

  function syncThemeUsages() {
    _syncThemeUsageByUser(0, User.getAll());
  }

  // private method
  function _syncThemeUsageByUser(index, users) {
    if (index == users.length) return;

    const unsyncedThemeUsages = ThemeUsage.findUnsyncedByUserUuid(users[index].uuid);
    _sendUnsyncedThemeUsage(0, unsyncedThemeUsages, () => _syncThemeUsageByUser(index + 1, users));
  }

  function _sendUnsyncedThemeUsage(index, unsyncedThemeUsages, callback) {
    if (index == unsyncedThemeUsages.length) {
      callback();
      return;
    }

    _sendCreateRequest(unsyncedThemeUsages[index], () => {
      ThemeUsage.deleteByUuid(unsyncedThemeUsages[index].uuid);
      _sendUnsyncedThemeUsage(index + 1, unsyncedThemeUsages, callback);
    }, () => {
      return;
    });
  }

  function _sendCreateRequest(themeUsageItem, successCallback, failureCallback) {
    if (!themeUsageItem.user_uuid && !User.currentLoggedIn() || !User.currentLoggedIn().id)
      return !!failureCallback && failureCallback();

    const userId = !!themeUsageItem.user_uuid ? User.findByUuid(themeUsageItem.user_uuid).id : User.currentLoggedIn().id;
    const params = {
      theme_usage: {
        app_user_id: userId,
        theme_id: themeUsageItem.theme_id,
        applied_at: themeUsageItem.applied_at ?? Moment().toDate(),
      }
    };

    const themeUsageApi = new ThemeUsageApi();
    themeUsageApi.post(themeUsageApi.listingUrl(), params, (res) => {
      !!successCallback && successCallback();
    }, (error) => {
      !!failureCallback && failureCallback();
    })
  }
})();

export default themeUsageService;