import {Platform} from 'react-native';
import Moment from 'moment';
import navigationService from '../services/navigation_service';
import Visit from '../models/Visit';
import networkService from './network_service';
import VisitApi from '../api/visitApi';

const visitService = (() => {
  return {
    recordVisitedCategory,
    syncVisits,
  }

  function recordVisitedCategory(category) {
    networkService.checkConnection(() => {
      _sendCreateRequest(category, null, () => {
        _saveVisitData(category);  // if failed to send visit to server then save it to realm
      });
    }, () => {
      _saveVisitData(category);  // if no internet connection save visit data to realm
    });
    navigationService.navigateCategory(category.uuid)
  }

  function syncVisits() {
    const unsyncedVisits = Visit.getUnsyncedVisits()
    if (unsyncedVisits.length == 0) return;

    _sendUnsyncedVisit(0, unsyncedVisits);
  }

  // private method
  function _sendUnsyncedVisit(index, unsyncedVisits) {
    if (index == unsyncedVisits.length) return;

    _sendCreateRequest(unsyncedVisits[index], () => {
      Visit.deleteByUuid(unsyncedVisits[index].uuid);  // when sync successful then remove synced visit from realm
      _sendUnsyncedVisit(index + 1, unsyncedVisits);
    }, () => {
      _sendUnsyncedVisit(unsyncedVisits.length, unsyncedVisits); // if get error then stop syncing
    });
  }

  function _sendCreateRequest(category, successCallback, failureCallback) {
    const params = {
      visit: {
        app_user_id: 'ee424c72-2a82-492b-b3c5-9035b119e234',
        visit_date: Moment().toDate(),
        page_attributes: {
          code: category.code,
          name: category.name,
          parent_code: category.parent_code,
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

  function _saveVisitData(category) {
    const data = {
      name: category.name,
      code: category.code,
      parent_code: category.parent_code,
    }
    Visit.create(data);
  }
})();

export default visitService;