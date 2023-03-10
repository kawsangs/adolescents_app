import { environment } from '../config/environment';

const urlUtil = (() => {
  return {
    getRelativeUrl,
    getAbsoluteUrl,
    getWebsiteUrl,
    isUrlWithHostname,
  }

  function getRelativeUrl(responsibleModel) {
    return `/api/${environment.apiVersion}/${responsibleModel}`;
  }

  function getAbsoluteUrl(relativeUrl) {
    if (!relativeUrl) return null;

    return environment.domain + relativeUrl;
  }

  function getWebsiteUrl(url) {
    const value = url.replace(/\s/g, '');
    if (!value.includes("http"))
      return `https://${value}`;

    return value;
  }

  function isUrlWithHostname(url) {
    const ipAddressUrl = new RegExp(`^https?://${_ipAddressPattern()}[:]?`).exec(url)
    const localhostUrl = new RegExp(`^https?://localhost[:]?`).exec(url)
    const domainUrl = new RegExp(`^https?://${_hostnamePattern()}[:]?`).exec(url)
    let result = null;

    if (!!ipAddressUrl)
      result = ipAddressUrl[0];
    else if (!!localhostUrl)
      result = localhostUrl[0];
    else if (!!domainUrl)
      result = domainUrl[0];
    else
      return false

    if (new RegExp(/:$/).test(result))
      return new RegExp(`^https?://(${_ipAddressPattern()}|${_hostnamePattern()}|localhost):[0-9]{1,4}`).test(url)

    return new RegExp(`^https?://(${_ipAddressPattern()}/|${_hostnamePattern()}|localhost/)`).test(url)
  }

  // private method
  function _hostnamePattern() {
    const addressPattern = `[a-z0-9]([-_]{1})?([.]{1})?`;
    const entityTypePattern = `([.][a-z]{2,})([/])?`;
    return `(${addressPattern})+${entityTypePattern}`
  }

  function _ipAddressPattern() {
    const octetsPattern = '[0-9]{1,3}';
    return `${octetsPattern}[.]${octetsPattern}[.]${octetsPattern}[.]${octetsPattern}`;
  }
})();

export default urlUtil;