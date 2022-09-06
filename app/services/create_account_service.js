import Moment from 'moment';
import DeviceInfo from 'react-native-device-info';
import AppUserApi from '../api/appUserApi';
import {apiDateTimeFormat} from '../constants/date_time_constant';

const createAccountService = (() => {
  return {
    create
  }

  async function create(params) {
    const newParams = {
      ...params,
      device_id: DeviceInfo.getDeviceId(),
      registered_at: Moment().format(apiDateTimeFormat)
    }

    const response = await new AppUserApi().post(newParams);
    console.log('response = ', response);
  }
})();

export default createAccountService;