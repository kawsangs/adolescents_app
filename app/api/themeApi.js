import Moment from 'moment';

import httpRequest from '../http/http_request';
import urlUtil from '../utils/url_util';
import { environment } from '../config/environment';

class ThemeApi {
  load = (page) => {
    const url = urlUtil.getAbsoluteUrl(urlUtil.getRelativeUrl('themes'));
    const options = {
      method: 'GET',
      params: {
        page: page,
        updated_at: Moment().toDate()
      }
    };
    return httpRequest.send(url, options, environment.apiKey, 'json');
  }
}

export default ThemeApi;