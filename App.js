/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import { StatusBar, useColorScheme } from 'react-native';

import AppNavigator from './app/navigators/app_navigator';

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <React.Fragment>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AppNavigator/>
    </React.Fragment>
  );
};

export default App;
