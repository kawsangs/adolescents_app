import { environment } from '../config/environment';

const urlUtil = (() => {
  return {
    concat,
    getAbsoluteUrl,
  }

  function concat(responsibleUrl, subUrl) {
    return responsibleUrl + subUrl;
  }

  function getAbsoluteUrl(relativeUrl) {
    if (!relativeUrl) return null;

    const endpointUrl = environment.domain;
    return endpointUrl + relativeUrl;
  }
})();

export default urlUtil;