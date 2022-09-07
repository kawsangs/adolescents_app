import Moment from 'moment';
import DeviceInfo from 'react-native-device-info';
import AppUserApi from '../api/appUserApi';
import {apiDateTimeFormat} from '../constants/date_time_constant';
import {APP_USER} from '../constants/async_storage_constant';
import apiService from './api_service';
import asyncStorageService from './async_storage_service';

const createAccountService = (() => {
  return {
    create,
    isValidForm
  }

  async function create(user, successCallback, failureCallback) {
    const characteristicAttrs = [];
    user.characteristics.map(characteristic => {
      characteristicAttrs.push({ characteristic_attributes: { code: characteristic } });
    });
    const params = {
      gender: user.gender,
      age: user.age,
      province_id: user.province_id,
      device_id: DeviceInfo.getDeviceId(),
      registered_at: Moment().format(apiDateTimeFormat),
      app_user_characteristics_attributes: characteristicAttrs,
    };

    const response = await new AppUserApi().post(params);
    apiService.handleApiResponse(response, (res) => {
      asyncStorageService.setItem(APP_USER, res);
      !!successCallback && successCallback(res);
    }, (error) => {
      !!failureCallback && failureCallback(error);
    })
  }

  function isValidForm(age, province) {
    return age > 0 && !!province;
  }
})();

export default createAccountService;