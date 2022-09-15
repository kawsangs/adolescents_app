import Moment from 'moment';
import DeviceInfo from 'react-native-device-info';

import AppUserApi from '../api/appUserApi';
import apiService from './api_service';
import networkService from './network_service';
import User from '../models/User';
import uuidv4 from '../utils/uuidv4_util';

const createAccountService = (() => {
  return {
    createUser,
    isValidForm,
    createAnonymousUser,
    syncUsers,
  }

  function createUser(user, callback) {
    if (!!User.loggedInUser())   // To prevent creating duplicate user when there is a logged in user
      return callback();

    const params = _buildData(user);
    User.create(params);  // save the user to in local storage
    _sendCreateRequest(params, callback);
  }

  function isValidForm(age, province) {
    return age > 0 && !!province;
  }

  function createAnonymousUser(callback) {
    const params = _buildData(null);
    User.create(params);
    _sendCreateRequest(params, callback);
  }

  function syncUsers() {
    const unsyncedUsers = User.unsyncedUsers();
    if (unsyncedUsers.length == 0)
      return;

    sendUnsyncUsers(0, unsyncedUsers);
  }

  // private method
  function sendUnsyncUsers(index, users) {
    _sendCreateRequest(users[index], () => {
      if (index == users.length - 1) return;

      sendUnsyncUsers(index + 1, users);
    });
  }

  function _sendCreateRequest(params, callback) {
    networkService.checkConnection(async () => {
      const response = await new AppUserApi().post(_userApiParams(params));
      apiService.handleApiResponse(response, (res) => {
        User.update(params.uuid, { id: res.id, synced: true });
        !!callback && callback();
      }, (error) => {
        !!callback && callback();
      });
    }, callback);
  }

  function _buildData(user) {
    const params = {
      uuid: uuidv4(),
      id: null,
      gender: user ? user.gender : null,
      age: user ? user.age : -1,
      province_id: user ? user.province_id : null,
      registered_at: Moment().toDate(),
      characteristics: user ? user.characteristics : [],
      synced: false,
    }

    return params;
  }

  function _userApiParams(user) {
    const characteristicAttrs = [];
    user.characteristics.map(characteristic => {
      characteristicAttrs.push({ characteristic_attributes: { code: characteristic } });
    });
    const params = {
      device_id: DeviceInfo.getDeviceId(),
      app_user_characteristics_attributes: characteristicAttrs,
      registered_at: user.registered_at,
      province_id: user.province_id,
      gender: user.gender,
      age: user.age,
    }

    return params;
  }
})();

export default createAccountService;