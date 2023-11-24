import Moment from 'moment';
import {Platform} from 'react-native';
import DeviceInfo from 'react-native-device-info';

import AppUserApi from '../api/appUserApi';
import apiService from './api_service';
import networkService from './network_service';
import appVisitService from './app_visit_service';
import User from '../models/User';
import Visit from '../models/Visit';
import Survey from '../models/Survey';
import SearchHistory from '../models/SearchHistory';
import uuidv4 from '../utils/uuidv4_util';
import randomId from '../utils/id_util';

const appUserService = (() => {
  return {
    createUser,
    isValidForm,
    createAnonymousUser,
    syncUsers,
    deleteUser,
  }

  function createUser(user) {
    if (User.hasCurrentLoggedIn()) return;  // To prevent creating duplicate user when there is a logged in user

    const params = _buildData(user);
    User.create(params);  // save the user to in local storage
    appVisitService.updateAppVisitsWithoutUser(params.uuid);  // update user uuid to app_visit
  }

  function isValidForm(age, province, occupation, educationLevel) {
    return age > 0 && !!province && !!occupation && !!educationLevel;
  }

  function createAnonymousUser() {
    const params = _buildData(null);
    User.create(params);
    appVisitService.updateAppVisitsWithoutUser(params.uuid);
  }

  function syncUsers(callback) {
    const unsyncedUsers = User.unsynced();
    if (unsyncedUsers.length == 0) {
      callback();
      return;
    }
    _sendUnsyncUsers(0, unsyncedUsers, callback);
  }

  function deleteUser() {
    const user = User.currentLoggedIn();
    SearchHistory.deleteAll();
    Visit.deleteByUser(user.uuid);
    Survey.deleteByUser(user.uuid);

    if (!!user.id) {
      new AppUserApi().delete(user.id);
      dispatch(resetSelectedVidAuthor())
      dispatch(resetSelectedLocation())
      User.deleteAccount(user);
    }
  }

  // private method
  function _sendUnsyncUsers(index, users, callback) {
    if (index == users.length) {
      !!callback && callback();
      return;
    }

    _sendRequestToApi(users[index], () => {
      _sendUnsyncUsers(index + 1, users, callback);
    })
  }

  function _sendRequestToApi(params, callback) {
    networkService.checkConnection(async () => {
      let response = null;
      if (!!params.id)
        response = await new AppUserApi().put(params.id, { device_id: await DeviceInfo.getUniqueId(), occupation: params.occupation, education_level: params.education_level });
      else
        response = await new AppUserApi().post(await _userApiParams(params));

      apiService.handleApiResponse(response, (res) => {
        User.update(params.uuid, { id: res.id, synced: true });
        !!callback && callback();
      }, (error) => {
        !!callback && callback();
      });
    }, callback)
  }

  function _buildData(user) {
    const params = {
      uuid: uuidv4(),
      id: null,
      gender: user ? user.gender : null,
      age: user ? user.age : -1,
      province_id: user ? user.province_id : null,
      occupation: user ? user.occupation : 'n_a',
      education_level: user ? user.education_level : 'n_a',
      registered_at: Moment().toDate(),
      characteristics: user ? user.characteristics : [],
      synced: false,
      anonymous: !user,
      user_uuid: randomId(),
    }

    return params;
  }

  async function _userApiParams(user) {
    const characteristicAttrs = [];
    user.characteristics.map(characteristic => {
      characteristicAttrs.push({ characteristic_attributes: { code: characteristic } });
    });

    let params = {
      device_id: await DeviceInfo.getUniqueId(),
      app_user_characteristics_attributes: characteristicAttrs,
      registered_at: user.registered_at,
      province_id: user.province_id,
      occupation: user.occupation,
      education_level: user.education_level,
      gender: user.gender,
      age: user.age,
      platform: Platform.OS
    }
    return params;
  }
})();

export default appUserService;