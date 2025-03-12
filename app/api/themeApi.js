import httpRequest from '../http/http_request';
import urlUtil from '../utils/url_util';
import { environment } from '../config/environment';

class ThemeApi {
  load = (page) => {
    const url = urlUtil.getAbsoluteUrl(urlUtil.getRelativeUrl('themes'));

    console.log('==== Theme API url = ', url);

    const options = {
      method: 'GET',
      params: {
        page: page
      }
    };
    return httpRequest.send(url, options, environment.apiKey, 'json');
  }
}

export default ThemeApi;