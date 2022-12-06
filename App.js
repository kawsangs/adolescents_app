/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useRef, useState } from 'react';
import type {Node} from 'react';
import { StatusBar, Text, AppState, Alert } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import * as Sentry from "@sentry/react-native";
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import {useTranslation} from 'react-i18next';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import FeatherIcon from 'react-native-vector-icons/Feather';

import AppNavigator from './app/navigators/app_navigator';
import i18nextInit from './app/localizations/i18next';
import color from './app/themes/color';
import { FontFamily } from './app/themes/font';
import { environment } from './app/config/environment';
import appVisitService from './app/services/app_visit_service'
import systemBackButtonHelper from './app/helpers/system_back_button_helper';
import seedDataService from './app/services/seed_data_service';

import MobileTokenService from './app/services/mobile_token_service';

import { store } from './app/store'
import { Provider } from 'react-redux'
import { navigationRef } from './app/navigators/app_navigator';

import NotifService from './app/services/NotifService';

Sentry.init({
  dsn: environment.sentryDSN,
});

i18nextInit();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: color.primaryColor,
  },
  fonts: {
    ...DefaultTheme.fonts,
    regular: { fontFamily: FontFamily.regular },
  }
};

Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.allowFontScaling = false;

const App: () => Node = () => {
  const {t} = useTranslation();
  let backHandler = null;

  const appState = useRef(AppState.currentState);
  const [appStateVisible, setAppStateVisible] = useState(appState.current);
  const notif = new NotifService((token) => {}, (notif) => {});

  useEffect(() => {
    SplashScreen.hide();
    MobileTokenService.handleSyncingToken();
    MobileTokenService.onNotificationOpenApp(() => navigationRef.current?.navigate('NotificationView'));
    seedDataService.seedToRealm();
    appVisitService.recordVisit();
    backHandler = systemBackButtonHelper.handleBackToExitApp(t('pressBackTwiceToExitTheApp'));

    const subscription = AppState.addEventListener("change", nextAppState => {
      if (
        appState.current.match(/inactive|background/) && nextAppState === "active"
      ) {
        notif.cancelAll();
      }

      appState.current = nextAppState;
      setAppStateVisible(appState.current);
    });

    return () => {
      backHandler.remove();
      subscription.remove();
    };
  }, []);

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
