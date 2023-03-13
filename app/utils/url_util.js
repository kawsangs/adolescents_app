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
    return new RegExp(`^https?://(${_hostnamePattern()}|${_ipAddressPattern()}|${_localhostPattern()})`).test(url)
  }

  // private method
  function _hostnamePattern() {
    const addressPattern = `[a-z0-9]([-_]{1})?([.]{1})?`;
    const entityTypePattern = `([.][a-z]{2,})`;
    return `(${addressPattern})+${entityTypePattern}(:[0-9]{1,4})?([/])?((/([a-z0-9?&=%-_]*))*)?$`
  }

  function _ipAddressPattern() {
    const octetsPattern = '[0-9]{1,3}';
    return `(${octetsPattern}[.]${octetsPattern}[.]${octetsPattern}[.]${octetsPattern})(:[0-9]{1,4})?((/([a-z0-9?&=%-_]*))*)?$`;
  }

  function _localhostPattern() {
    return `localhost(:[0-9]{1,4})?((/([a-z0-9?&=%-_]*))*)?$`
  }
})()

export default urlUtil;