import {Platform} from 'react-native';
import Moment from 'moment';
import navigationService from '../services/navigation_service';
import Visit from '../models/Visit';
import User from '../models/User';
import networkService from './network_service';
import VisitApi from '../api/visitApi';
import {pageable_types} from '../constants/visit_constant';

const visitService = (() => {
  return {
    recordVisitCategory,
    recordVisitVideo,
    recordVisitFacility,
    recordVisitAction,
    syncVisits,
  }

  function recordVisitCategory(category) {
    category.pageable_type = pageable_types.page;
    recordVisitAction(category, () => navigationService.navigateCategory(category.uuid));
  }

  function recordVisitVideo(video, callback) {
    const videoParams = {
      uuid: video.uuid,
      name: "video detail",
      code: "video_detail",
      parent_code: "video",
      pageable_type: pageable_types.video
    };
    recordVisitAction(videoParams, () => callback());
  }

  function recordVisitFacility(facility, callback) {
    const facilityParams = {
      uuid: facility.uuid,
      name: "facility detail",
      code: "facility_detail",
      parent_code: "facility",
      pageable_type: pageable_types.facility
    };
    recordVisitAction(facilityParams, () => callback());
  }

  function recordVisitAction(visitItem, callback) {
    networkService.checkConnection(() => {
      _sendCreateRequest(visitItem, null, () => {
        _saveVisitData(visitItem);  // if failed to send visit to server then save it to realm
      });
    }, () => {
      _saveVisitData(visitItem);  // if no internet connection save visit data to realm
    });

    !!callback && callback()
  }

  function syncVisits() {
    const syncedUsers = User.synced();
    if (syncedUsers.length == 0) return;

    _syncVisitByUser(0, syncedUsers);
  }

  // private method
  function _syncVisitByUser(index, users) {
    if (index == users.length) return;

    const unsyncedVisits = Visit.findUnsyncedVisitsByUserUuid(users[index].uuid);
    if (unsyncedVisits.length == 0) return;

    _sendUnsyncedVisit(0, unsyncedVisits, () => _syncVisitByUser(index + 1, users));
  }

  function _sendUnsyncedVisit(index, unsyncedVisits, callback) {
    if (index == unsyncedVisits.length) {
      callback();
      return;
    }

    _sendCreateRequest(unsyncedVisits[index], () => {
      Visit.deleteByUuid(unsyncedVisits[index].uuid);  // when sync successful then remove synced visit from realm
      _sendUnsyncedVisit(index + 1, unsyncedVisits, callback);
    }, () => {
      return;  // if get error then stop syncing
    });
  }

  function _sendCreateRequest(visitItem, successCallback, failureCallback) {
    if (!visitItem.user_uuid && !User.currentLoggedIn())    // If there is no user login yet then save the visit data to realm
      return !!failureCallback && failureCallback();

    const userId = !!visitItem.user_uuid ? User.findByUuid(visitItem.user_uuid).id : User.currentLoggedIn().id;

    const params = {
      visit: {
        app_user_id: userId,
        visit_date: Moment().toDate(),
        pageable_id: visitItem.pageable_id || visitItem.uuid,
        pageable_type: visitItem.pageable_type,
        page_attributes: {
          code: visitItem.code,
          name: visitItem.name,
          parent_code: visitItem.parent_code || null,
        },
        platform_attributes: {
          name: Platform.OS
        }
      }
    }

    const visitApi = new VisitApi();
    visitApi.post(visitApi.listingUrl(), params, (res) => {
      !!successCallback && successCallback();
    }, (error) => {
      !!failureCallback && failureCallback();
    });
  }

  function _saveVisitData(visitItem) {
    const data = {
      name: visitItem.name,
      code: visitItem.code,
      parent_code: visitItem.parent_code || null,
      pageable_id: visitItem.uuid || null,
      pageable_type: visitItem.pageable_type,
    }

    Visit.create(data);
  }
})();

export default visitService;
