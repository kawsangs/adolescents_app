import urlUtil from '../utils/url_util';

class BaseApi {
  constructor(responsibleModel, subModel = '') {
    this.responsibleModel = responsibleModel;
    this.subModel = subModel;
  }

  listingUrl = () => {
    return `/api/v1/${this.responsibleModel}`;
  }

  listingObjectUrl = (id) => {
    if (!id) return null;

    return `/api/v1/${this.responsibleModel}/${id}`;
  }

  listingNestedObjectUrl = (id) => {
    if (!id || !this.subModel) return null;

    return urlUtil.concat(this.listingUrl(), `/${id}/${this.subModel}`);
  }


}

export default BaseApi;