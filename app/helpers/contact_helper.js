import {Linking} from 'react-native';
import { PHONE, FACEBOOK, TELEGRAM } from '../constants/contact_constant';

const contactHelper = (() => {
  return {
    getContactLink,
    openContactLink,
    getFormattedPhoneNumber,
  };

  function getContactLink(type, value) {
    switch (type.toLowerCase()) {
      case PHONE:
        return `tel:${value}`;
      case FACEBOOK:
        return value;
      case TELEGRAM:
        return `https://t.me/${value}`
      default:
        return value.replace(/\s/g, '');
    }
  }

  function openContactLink(type, value) {
    if (!!value) Linking.openURL(getContactLink(type, value));
  }

  function getFormattedPhoneNumber(value) {
    if (!value) return '';

    const result = value.length == 9 ? value.match(/(\d{3})(\d{3})(\d{3})/) : value.match(/(\d{3})(\d{3})(\d{4})/);
    return `${result[1]} ${result[2]} ${result[3]}`;
  }
})();

export default contactHelper;