import authenticationService from '../services/authentication_service';

class UserBasedApi {
  constructor(responsiveModel, subModel) {
    this.responsibleModel = responsiveModel;
    this.subModel = subModel;
  }

  sendRequest = (callback) => {
    authenticationService.reauthenticate((token) => {
      callback(token);
    });
  }
}

export default UserBasedApi;