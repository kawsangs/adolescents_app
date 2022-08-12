import BaseApi from './baseApi';
import urlUtil from '../utils/url_util';

class VisitorApi extends BaseApi {
  constructor() {
    super('visitors')
  }

  create = (successCallback, failureCallback) => {
    const options = {
      method: 'POST',
      params: {
        visitor: {
          device_id: '123abc',
          page_attributes: { code: "page_one", name: "Page one", parent_code: null },
          platform_attributes: { name: 'android' }
        }
      }
    };

    const url = urlUtil.getAbsoluteUrl(this.listingUrl())
    BaseApi.sendUnauthenticatedRequest(url, options, 'json', successCallback, failureCallback);
  }
}

export default VisitorApi;