import {FONTAWESOME, FEATHER, MATERIAL_COMMUNNITY} from './icon_constant';

export const FACEBOOK = "facebook";
export const TELEGRAM = "telegram";
export const PHONE = "phone";
export const WEBSITE = "website";
export const SMS = "sms";
export const MESSENGER = "messenger";
export const WHATSAPP = "whatsapp";

export const contactIcons = {
  facebook: { type: FONTAWESOME, name: "facebook-f" },
  telegram: { type: FONTAWESOME, name: "paper-plane" },
  phone: { type: FONTAWESOME, name: "phone" },
  website: { type: FEATHER, name: "globe" },
  sms: { type: MATERIAL_COMMUNNITY, name: "message-processing-outline" },
  messenger: { type: MATERIAL_COMMUNNITY, name: "facebook-messenger" },
  whatsapp: { type: FONTAWESOME, name: "whatsapp" }
}