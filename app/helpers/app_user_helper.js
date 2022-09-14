import asyncStorageService from '../services/async_storage_service';
import {APP_USER} from '../constants/async_storage_constant';

const appUserHelper = (() => {
  return {
    currentUser,
  }

  async function currentUser() {
    return await asyncStorageService.getItem(APP_USER);
  }
})();

export default appUserHelper;