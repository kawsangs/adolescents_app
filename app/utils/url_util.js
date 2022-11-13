import { environment } from '../config/environment';

const urlUtil = (() => {
  return {
    getRelativeUrl,
    getAbsoluteUrl,
    getWebsiteUrl,
  }

  function getRelativeUrl(responsibleModel) {
    return `/api/${environment.apiVersion}/${responsibleModel}`;
  }

  function getAbsoluteUrl(relativeUrl) {
    if (!relativeUrl) return null;

    // const endpointUrl = environment.domain;
    // return endpointUrl + relativeUrl;
    return environment.domain + relativeUrl;
  }

  function getWebsiteUrl(url) {
    const value = url.replace(/\s/g, '');
    if (!value.includes("http"))
      return `https://${value}`;

    return value;
  }
})();

export default urlUtil;