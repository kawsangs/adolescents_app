import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MainView from '../views/main/MainView';
import IntroductionView from '../views/introductions/IntroductionView';
import LoginSelectionView from '../views/loginSelections/LoginSelectionView';
import CreateAccountView from '../views/createAccounts/CreateAccountView';
import BottomTabNavigator from './bottom_tab_navigator';

const Stack = createNativeStackNavigator();

function AppNaviator() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName='MainView'
      >
        <Stack.Screen
          name="MainView"
          component={MainView}
          options={{
            header: () => null,
          }}
        />
        <Stack.Screen
          name="IntroductionView"
          component={IntroductionView}
          options={{
            header: () => null,
          }}
        />
        <Stack.Screen
          name="LoginSelectionView"
          component={LoginSelectionView}
          options={{
            header: () => null,
          }}
        />
        <Stack.Screen
          name="CreateAccountView"
          component={CreateAccountView}
          options={{
            header: () => null,
          }}
        />
        <Stack.Screen name="BottomTabs" component={BottomTabNavigator}
          options={{
            header: () => null,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export const navigationRef = React.createRef();

export default AppNaviator;