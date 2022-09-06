import EncryptedStorage from 'react-native-encrypted-storage';

import SessionApi from '../api/sessionApi';
import apiService from './api_service';
import { AUTH_ACCOUNT, AUTH_TOKEN } from '../constants/async_storage_constant';
import cryptoUtil from '../utils/crypto_util';

const authenticationService = (() => {
  return {
    authenticate,
    reauthenticate
  }

  async function authenticate(email, password, successCallback, failureCallback) {
    EncryptedStorage.setItem(AUTH_ACCOUNT, JSON.stringify({ email: cryptoUtil.encrypt(email), password: cryptoUtil.encrypt(password) }));
    handleAuthenticate(email, password, (token) => successCallback(token), failureCallback);
  }

  async function reauthenticate(successCallback, failureCallback) {
    const account = JSON.parse(await EncryptedStorage.getItem(AUTH_ACCOUNT));
    handleAuthenticate(cryptoUtil.decrypt(account.email), cryptoUtil.decrypt(account.password), (token) => successCallback(token), failureCallback);
  }

  // private method
  async function handleAuthenticate(email, password, successCallback, failureCallback) {
    const response = await new SessionApi().authenticate(email, password);
    apiService.handleApiResponse(response, (res) => {
      EncryptedStorage.setItem(AUTH_TOKEN, res.authentication_token);
      !!successCallback && successCallback(res.authentication_token);
    }, (error) => {
      EncryptedStorage.removeItem(AUTH_TOKEN);
      !!failureCallback && failureCallback();
    })
  }
})();

export default authenticationService;