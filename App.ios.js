/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useRef, useState } from 'react';
import type {Node} from 'react';
import { StatusBar, Text, AppState, View } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import * as Sentry from "@sentry/react-native";
import { DefaultTheme, Provider as PaperProvider, configureFonts, MD2LightTheme } from 'react-native-paper';
import {useTranslation} from 'react-i18next';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import FeatherIcon from 'react-native-vector-icons/Feather';
import AsyncStorage from '@react-native-async-storage/async-storage';

import AppNavigator from './app/navigators/app_navigator';
import i18nextInit from './app/localizations/i18next';
import color from './app/themes/color';
import { FontFamily } from './app/themes/font';
import { environment } from './app/config/environment';
import appVisitService from './app/services/app_visit_service'
import seedDataService from './app/services/seed_data_service';
import notificationService from './app/services/notification_service';

import { store } from './app/store'
import { Provider } from 'react-redux'
import { navigationRef } from './app/navigators/app_navigator';

import NotifService from './app/services/NotifService';
import useInAppUpdate from './app/hooks/useInAppUpdate';
import asyncStorageService from './app/services/async_storage_service';
import { HAS_SHOWN_APP_UPDATE } from './app/constants/async_storage_constant';

Sentry.init({
  dsn: environment.sentryDSN,
});

i18nextInit();

const fontConfig = {
  ios: {
    regular: {
      fontFamily: FontFamily.regular,
      fontWeight: 'normal',
    },
  },
};

const theme = {
  ...MD2LightTheme,
  colors: {
    ...MD2LightTheme.colors,
    primary: color.primaryColor,
  },
  fonts: configureFonts({
    config: fontConfig,
    isV3: false
  })
};

Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.allowFontScaling = false;

const App: () => Node = () => {
  const {i18n} = useTranslation();
  const appState = useRef(AppState.currentState);
  const [appStateVisible, setAppStateVisible] = useState(appState.current);
  const notif = new NotifService((token) => {}, (notif) => {});
  // useInAppUpdate();

  useEffect(() => {
    setDefaultLocale();
    SplashScreen.hide();
    notificationService.onNotificationOpenedApp(() => navigationRef.current?.navigate('NotificationView'));
    seedDataService.seedToRealm();
    appVisitService.recordVisit();
    asyncStorageService.removeItem(HAS_SHOWN_APP_UPDATE);

    const subscription = AppState.addEventListener("change", nextAppState => {
      if (
        appState.current.match(/inactive|background/) && nextAppState === "active"
      ) {
        notif.removeAll();
      }

      appState.current = nextAppState;
      setAppStateVisible(appState.current);
    });

    return () => {
      subscription.remove();
    };
  }, []);

  const setDefaultLocale = async () => {
    const selectedLanguage = await AsyncStorage.getItem('APP_LANGUAGE')
    i18n.changeLanguage(selectedLanguage);
  }

  return (
    <React.Fragment>
      <Provider store={store}>
        <PaperProvider
          settings={{
            icon: props => <FeatherIcon {...props} />
          }}
          theme={theme}
        >
          <GestureHandlerRootView style={{flex: 1}}>
            <BottomSheetModalProvider>
              <StatusBar barStyle={'light-content'} />
              <AppNavigator/>
            </BottomSheetModalProvider>
          </GestureHandlerRootView>
        </PaperProvider>
      </Provider>
    </React.Fragment>
  );
};

export default App;
