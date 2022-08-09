import httpRequest from '../http/http_request';
import urlUtil from '../utils/url_util';

// SessionApi is not extended from BaseApi in order to prevent the warning of "Require cycles" that might lead to an error
class SessionApi {
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
    const url = urlUtil.getAbsoluteUrl(urlUtil.getRelativeUrl('sign_in'));
    return httpRequest.send(url, options, token, 'json');
  }
}

export default SessionApi;