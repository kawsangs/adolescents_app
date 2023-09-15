import i18next from 'i18next';
import { initReactI18next } from "react-i18next";
import 'intl-pluralrules'

import { environment } from '../config/environment';

import en from './en.json';
import km from './km.json';
import datetimeEN from './date_time_en.json';
import datetimeKM from './date_time_km.json';
import locationEN from './location_en.json';
import locationKM from './location_km.json';

const i18nextInit = () => {
  if (i18next.isInitialized)
    return;

  return (
    i18next
      .use(initReactI18next)
      .init({
        lng: environment.defaultLanguage,
        fallbackLng: environment.defaultLanguage,
        resources: {
          en: { translation: {...en, ...datetimeEN, ...locationEN} },
          km: { translation: {...km, ...datetimeKM, ...locationKM} }
        }
      })
  );
}

export default i18nextInit;