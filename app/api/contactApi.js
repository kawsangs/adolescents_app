import httpRequest from '../http/http_request';
import urlUtil from '../utils/url_util';
import { environment } from '../config/environment';

class ContactApi {
  load = (page) => {
    const url = urlUtil.getAbsoluteUrl(urlUtil.getRelativeUrl('contacts'))
    const options = {
      method: 'GET',
      params: {
        page: page
      }
    }
    return httpRequest.send(url, options, environment.apiKey, 'json')
  }
}

export default ContactApi;