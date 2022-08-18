import { environment } from '../config/environment';

class KeyBasedAuth {
  sendRequest = (requestCallback) => {
    requestCallback(environment.apiKey);
  }
}

export default KeyBasedAuth;