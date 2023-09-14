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
  hotline: { type: FONTAWESOME, name: "phone", color: color.primaryColor },
  website: { type: FEATHER, name: "globe", color: color.primaryColor },
  sms: { type: FONTAWESOME_5, name: "sms", color: color.primaryColor },
  messenger: { type: MATERIAL_COMMUNNITY, name: "facebook-messenger", color: color.primaryColor },
  whatsapp: { type: FONTAWESOME, name: "whatsapp", color: color.primaryColor }
}

export const contactErrorMessages = {
  hotline: "មិនអាចធ្វើការទំនាក់ទំនងជាមួយលេខទូរស័ព្ទនេះបានទេ។ សូមធ្វើការពិនិត្យមើលថាតើឧបករណ៍របស់អ្នកអាចធ្វើការហៅចេញតាមប្រព័ន្ធទូរស័ព្ទបាន។",
  sms: "មិនអាចធ្វើការទំនាក់ទំនងជាមួយសារ SMS នេះបានទេ។ សូមធ្វើការពិនិត្យមើលថាតើឧបករណ៍របស់អ្នកអាចធ្វើការផ្ញើសារ SMS បាន។",
  messenger: "មិនអាចធ្វើការទំនាក់ទំនងជាមួយ Messenger នេះបានទេ។ សូមធ្វើការពិនិត្យមើលថាតើឧបករណ៍របស់អ្នកមានតំឡើងកម្មវិធី Messenger រួចហើយ។",
  telegram: "មិនអាចធ្វើការទំនាក់ទំនងជាមួយតេឡេក្រាមនេះបានទេ។ សូមធ្វើការពិនិត្យមើលថាតើឧបករណ៍របស់អ្នកមានតំឡើងកម្មវិធីតេឡេក្រាមរួចហើយ។"
}

export const contactCodes = {
  "facebook": FACEBOOK,
  "telegram": TELEGRAM,
  "hotline": PHONE,
  "website": WEBSITE,
  "sms": SMS,
  "messenger": MESSENGER,
  "whatsapp": WHATSAPP
}