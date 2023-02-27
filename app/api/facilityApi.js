import httpRequest from '../http/http_request';
import urlUtil from '../utils/url_util';
import { environment } from '../config/environment';

class FacilityApi {
  load = () => {
    const url = urlUtil.getAbsoluteUrl(urlUtil.getRelativeUrl('facilities'))
    const options = {
      method: 'GET',
      params: {
        page: 1
      }
    }
    return httpRequest.send(url, options, environment.apiKey, 'json')
  }
}

export default FacilityApi;