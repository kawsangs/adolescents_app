/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import type {Node} from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import SplashScreen from 'react-native-splash-screen';

import AppNavigator from './app/navigators/app_navigator';

const App: () => Node = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  const isDarkMode = useColorScheme() === 'dark';

  return (
    <React.Fragment>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AppNavigator/>
    </React.Fragment>
  );
};

export default App;
