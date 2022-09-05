import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeView from '../views/home/HomeView';

const Stack = createNativeStackNavigator();

const HomeNavigator = () => {
  return (
     <Stack.Navigator
        initialRouteName='MainView'
      >
        <Stack.Screen
          name="HomeView"
          component={HomeView}
          options={{
            header: () => null,
          }}
        />
      </Stack.Navigator>
  )
}

export default HomeNavigator;