import Moment from 'moment';
import DeviceInfo from 'react-native-device-info';

import AppUserApi from '../api/appUserApi';
import {apiDateTimeFormat} from '../constants/date_time_constant';
import apiService from './api_service';
import networkService from './network_service';
import User from '../models/User';
import uuidv4 from '../utils/uuidv4_util';

const createAccountService = (() => {
  return {
    createUser,
    isValidForm,
    createAnonymousUser,
  }

  function createUser(user, successCallback, failureCallback) {
    const characteristicAttrs = [];
    const params = _buildData(user);
    _saveUserInLocal(params);    // save user to realm

    networkService.checkConnection(() => {
      user.characteristics.map(characteristic => {
        characteristicAttrs.push({ characteristic_attributes: { code: characteristic } });
      });
      params['app_user_characteristics_attributes'] = characteristicAttrs;
      params['device_id'] = DeviceInfo.getDeviceId();
      delete params.characteristics;
      _sendCreateRequest(params, successCallback, failureCallback)
    }, successCallback);
  }

  function isValidForm(age, province) {
    return age > 0 && !!province;
  }

  function createAnonymousUser() {
    _saveUserInLocal(_buildData(null))
  }

  // private method
  async function _sendCreateRequest(params, successCallback, failureCallback) {
    const response = await new AppUserApi().post(params);
    apiService.handleApiResponse(response, (res) => {
      User.update(params.uuid, { id: res.id, synced: true });
      !!successCallback && successCallback(res);
    }, (error) => {
      !!failureCallback && failureCallback(error);
    })
  }

  function _saveUserInLocal(params) {
    const data = params;
    data.synced = false;
    User.create(data);
  }

  function _buildData(user) {
    const params = {
      uuid: uuidv4(),
      id: null,
      gender: user ? user.gender : null,
      age: user ? user.age : 0,
      province_id: user ? user.province_id : null,
      registered_at: Moment().format(apiDateTimeFormat),
      characteristics: user ? user.characteristics : [],
    }

    return params;
  }
})();

export default createAccountService;