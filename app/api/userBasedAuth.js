import authenticationService from '../services/authentication_service';

class UserBasedAuth {
  sendRequest = (requestCallback) => {
    authenticationService.reauthenticate((token) => {
      requestCallback(token);
    });
  }
}

export default UserBasedAuth;