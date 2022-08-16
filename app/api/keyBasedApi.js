import { environment } from '../config/environment';

class KeyBasedApi {
  sendRequest = (requestCallback) => {
    requestCallback(environment.apiKey);
  }
}

export default KeyBasedApi;