import authenticationService from '../services/authentication_service';

class UserBasedApi {
  sendRequest = (requestCallback) => {
    authenticationService.reauthenticate((token) => {
      requestCallback(token);
    });
  }
}

export default UserBasedApi;