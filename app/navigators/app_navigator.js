import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import IntroductionView from '../views/introductions/IntroductionView';
import BottomTabNavigator from './bottom_tab_navigator';
import { environment } from '../config/environment';

const Stack = createNativeStackNavigator();

function AppNaviator() {
  const initialRouteName = environment.showIntroSlider ? 'IntroductionScreen' : 'BottomTab';

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={initialRouteName}
      >
        <Stack.Screen
          name="IntroductionScreen"
          component={IntroductionView}
          options={{
            header: () => null,
          }}
        />

        <Stack.Screen name="BottomTab" component={BottomTabNavigator}
          options={{
            header: () => null,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNaviator;