import i18next from 'i18next';
import { initReactI18next } from "react-i18next";
import 'intl-pluralrules'

import { environment } from '../config/environment';

import en from './en.json';
import km from './km.json';

i18next
  .use(initReactI18next)
  .init({
    lng: environment.defaultLanguage,
    fallbackLng: environment.defaultLanguage,
    debug: true,
    resources: {
      en: {
        translation: en
      },
      km: {
        translation: km
      }
    }
  });

export default i18next;