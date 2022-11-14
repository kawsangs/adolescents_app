import {Linking} from 'react-native';
import urlUtil from '../utils/url_util';
import {FACEBOOK} from '../constants/contact_constant';

const contactHelper = (() => {
  return {
    getContactLink,
    openContactLink,
    getFormattedPhoneNumber,
  };

  function getContactLink(type, value) {
    if (value.includes("http")) return value;

    const contactLinks = {
      phone: `tel:${value}`,
      facebook: value,
      telegram: `https://t.me/${value}`,
      messenger: `http://m.me/${value}`,
      whatsapp: `https://wa.me/${value}`,
      sms: `sms:${value}`,
      website: urlUtil.getWebsiteUrl(value),
    }

    return !!contactLinks[type] ? contactLinks[type] : value;
  }

  function openContactLink(type, value) {
    if (type == FACEBOOK && !value.includes("facebook")) return;

    if (!!value) Linking.openURL(getContactLink(type, value));
  }

  function getFormattedPhoneNumber(value) {
    if (!value) return '';

    const result = value.length == 9 ? value.match(/(\d{3})(\d{3})(\d{3})/) : value.match(/(\d{3})(\d{3})(\d{4})/);
    return `${result[1]} ${result[2]} ${result[3]}`;
  }
})();

export default contactHelper;