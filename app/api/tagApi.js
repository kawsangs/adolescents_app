import httpRequest from '../http/http_request';
import urlUtil from '../utils/url_util';
import { environment } from '../config/environment';

class TagApi {
  load = () => {
    const url = urlUtil.getAbsoluteUrl(urlUtil.getRelativeUrl('tags'))
    return httpRequest.send(url, {method: 'GET'}, environment.apiKey, 'json')
  }
}

export default TagApi;