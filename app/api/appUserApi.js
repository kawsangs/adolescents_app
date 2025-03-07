import httpRequest from '../http/http_request';
import urlUtil from '../utils/url_util';
import { environment } from '../config/environment';

class AppUserApi {
  post = (params) => {
    const options = {
      method: 'POST',
      params: { app_user: params }
    };

    const url = urlUtil.getAbsoluteUrl(urlUtil.getRelativeUrl('app_users'));
    return httpRequest.send(url, options, environment.apiKey, 'json');
  }

  put = (userId, params) => {
    const options = {
      method: 'PUT',
      params: { app_user: params }
    }

    const url = `${urlUtil.getAbsoluteUrl(urlUtil.getRelativeUrl('app_users'))}/${userId}`;
    return httpRequest.send(url, options, environment.apiKey, 'json');
  }

  delete = (userId, reasonCode) => {
    const options = {
      method: 'DELETE',
      params: {
        app_user: { reason_ids: [reasonCode] }
      }
    }
    const url = `${urlUtil.getAbsoluteUrl(urlUtil.getRelativeUrl('app_users'))}/${userId}`;
    return httpRequest.send(url, options, environment.apiKey, 'json');
  }
}

export default AppUserApi;