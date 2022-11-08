/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import type {Node} from 'react';
import { StatusBar, Text } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import * as Sentry from "@sentry/react-native";
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import {useTranslation} from 'react-i18next';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';

import AppNavigator from './app/navigators/app_navigator';
import i18nextInit from './app/localizations/i18next';
import color from './app/themes/color';
import { FontFamily } from './app/themes/font';
import { environment } from './app/config/environment';
import appVisitService from './app/services/app_visit_service'
import systemBackButtonHelper from './app/helpers/system_back_button_helper';
import seedDataService from './app/services/seed_data_service';

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

  useEffect(() => {
    SplashScreen.hide();
    seedDataService.seedToRealm();
    appVisitService.recordVisit();
    backHandler = systemBackButtonHelper.handleBackToExitApp(t('pressBackTwiceToExitTheApp'));

    return () => backHandler.remove();
  }, []);

  return (
    <React.Fragment>
      <PaperProvider theme={theme}>
        <GestureHandlerRootView style={{flex: 1}}>
          <BottomSheetModalProvider>
            <StatusBar barStyle={'light-content'} />
            <AppNavigator/>
          </BottomSheetModalProvider>
        </GestureHandlerRootView>
      </PaperProvider>
    </React.Fragment>
  );
};

export default App;
