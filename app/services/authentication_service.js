import EncryptedStorage from 'react-native-encrypted-storage';

import SessionApi from '../api/sessionApi';
import apiService from './api_service';
import { AUTH_ACCOUNT, AUTH_TOKEN } from '../constants/authentication_constant';

const authenticationService = (() => {
  return {
    authenticate,
  }

  async function authenticate(email, password, successCallback, failureCallback) {
    EncryptedStorage.setItem(AUTH_ACCOUNT, JSON.stringify({ email: email, password: password }));
    const response = await new SessionApi().authenticate(email, password);
    apiService.handleApiResponse(response, (res) => {
      EncryptedStorage.setItem(AUTH_TOKEN, res.authentication_token);
      successCallback();
    }, (error) => {
      console.log('error auth = ', error)
      EncryptedStorage.removeItem(AUTH_TOKEN);
      failureCallback();
    })
  }
})();

export default authenticationService;