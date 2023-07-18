import Moment from 'moment';
import {Platform} from 'react-native';
import DeviceInfo from 'react-native-device-info';

import AppUserApi from '../api/appUserApi';
import apiService from './api_service';
import networkService from './network_service';
import appVisitService from './app_visit_service';
import User from '../models/User';
import uuidv4 from '../utils/uuidv4_util';

const createAccountService = (() => {
  return {
    createUser,
    isValidForm,
    createAnonymousUser,
    syncUsers,
  }

  function createUser(user) {
    if (User.hasCurrentLoggedIn()) return;  // To prevent creating duplicate user when there is a logged in user

    const params = _buildData(user);
    User.create(params);  // save the user to in local storage
    appVisitService.updateAppVisitsWithoutUser(params.uuid);  // update user uuid to app_visit
  }

  function isValidForm(age, province, occupation) {
    return age > 0 && !!province && !!occupation;
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
        response = await new AppUserApi().put(params.id, { device_id: await DeviceInfo.getUniqueId(), occupation: params.occupation });
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
      occupation: user ? user.occupation : null,
      registered_at: Moment().toDate(),
      characteristics: user ? user.characteristics : [],
      synced: false,
      anonymous: !user
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
      gender: user.gender,
      age: user.age,
      platform: Platform.OS
    }
    return params;
  }
})();

export default createAccountService;