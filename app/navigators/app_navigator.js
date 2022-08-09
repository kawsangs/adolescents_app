import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import IntroductionView from '../views/introductions/IntroductionView';
import BottomTabNavigator from './bottom_tab_navigator';

const Stack = createNativeStackNavigator();

function AppNaviator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Introduction"
      >
        <Stack.Screen
          name="Introduction"
          component={IntroductionView}
          options={{
            header: () => null,
          }}
        />

        <Stack.Screen name="BottomTabHome" component={BottomTabNavigator}
          options={{
            header: () => null,
            // title: 'Youth Mobile App',
            // headerRight: () => (
            //   <Button
            //     onPress={() => alert('This is a button!')}
            //     title="Info"
            //     color="black"
            //   />
            // ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNaviator;