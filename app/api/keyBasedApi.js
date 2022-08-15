import { environment } from '../config/environment';

class KeyBasedApi {
  constructor(responsiveModel, subModel) {
    this.responsibleModel = responsiveModel;
    this.subModel = subModel;
  }

  sendRequest = (callback) => {
    callback(environment.accessToken);
  }
}

export default KeyBasedApi;