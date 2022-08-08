import BaseApi from './baseApi';
import httpRequest from '../http/http_request';
import urlUtil from '../utils/url_util';

class SessionApi extends BaseApi {
  constructor() {
    super('sign_in');
  }

  authenticate = (username, password) => {
    const options = {
      method: 'POST',
      params: {
        user: {
          email: username,
          password: password
        }
      }
    };

    const token = null;
    const url = urlUtil.getAbsoluteUrl(this.listingUrl());
    return httpRequest.send(url, options, token, 'json');
  }
}

export default SessionApi;