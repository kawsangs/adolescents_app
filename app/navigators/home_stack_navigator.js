import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeView from '../views/home/HomeView';

const Stack = createNativeStackNavigator();

const HomeStackNavigator = () => {
  return (
     <Stack.Navigator
        initialRouteName='HomeView'
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

export default HomeStackNavigator;