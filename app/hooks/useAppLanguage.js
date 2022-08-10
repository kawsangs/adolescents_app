import { useState } from "react";
import { useTranslation } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { environment } from '../config/environment';

const APP_LANGUAGE = 'APP_LANGUAGE'

const useAppLanguage = () => {
  const [appLanguage, setAppLanguage] = useState(environment.defaultLanguage);
  const { i18n } = useTranslation();

  function changeAppLanguage(language) {
    i18n.changeLanguage(language);
    setAppLanguage(language);
    AsyncStorage.setItem(APP_LANGUAGE, language)
  }

  return [appLanguage, changeAppLanguage];
}

export default useAppLanguage;