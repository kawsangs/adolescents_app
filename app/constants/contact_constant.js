import {FONTAWESOME, FONTAWESOME_5, FEATHER, MATERIAL_COMMUNNITY} from './icon_constant';
import color from '../themes/color';

export const FACEBOOK = "facebook";
export const TELEGRAM = "telegram";
export const PHONE = "phone";
export const WEBSITE = "website";
export const SMS = "sms";
export const MESSENGER = "messenger";
export const WHATSAPP = "whatsapp";

export const contactIcons = {
  facebook: { type: FONTAWESOME, name: "facebook-f", color: color.facebookColor },
  telegram: { type: FONTAWESOME, name: "telegram", color: color.telegramColor },
  phone: { type: FONTAWESOME, name: "phone", color: color.primaryColor },
  website: { type: FEATHER, name: "globe", color: color.primaryColor },
  sms: { type: FONTAWESOME_5, name: "sms", color: color.primaryColor },
  messenger: { type: MATERIAL_COMMUNNITY, name: "facebook-messenger", color: color.primaryColor },
  whatsapp: { type: FONTAWESOME, name: "whatsapp", color: color.primaryColor }
}