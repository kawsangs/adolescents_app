/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import type {Node} from 'react';
import { StatusBar } from 'react-native';
import SplashScreen from 'react-native-splash-screen';

import AppNavigator from './app/navigators/app_navigator';

const App: () => Node = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <React.Fragment>
      <StatusBar barStyle={'light-content'} />
      <AppNavigator/>
    </React.Fragment>
  );
};

export default App;
