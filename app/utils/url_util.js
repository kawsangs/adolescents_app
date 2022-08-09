import { environment } from '../config/environment';

const urlUtil = (() => {
  return {
    getRelativeUrl,
    getAbsoluteUrl,
  }

  function getRelativeUrl(responsibleModel) {
    return `/api/v1/${responsibleModel}`;
  }

  function getAbsoluteUrl(relativeUrl) {
    if (!relativeUrl) return null;

    const endpointUrl = environment.domain;
    return endpointUrl + relativeUrl;
  }
})();

export default urlUtil;