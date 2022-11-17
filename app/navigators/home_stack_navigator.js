import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeView from '../views/home/HomeView';
import SubCategoryView from '../views/subCategories/SubCategoryView';
import LeafCategoryView from '../views/leafCategories/LeafCategoryView';
import NotificationView from '../views/notifications/NotificationView';
import MentalSupportView from '../views/mentalSupports/MentalSupportView';

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
        <Stack.Screen
          name="SubCategoryView"
          component={SubCategoryView}
          options={{
            header: () => null,
          }}
        />
        <Stack.Screen
          name="LeafCategoryView"
          component={LeafCategoryView}
          options={{
            header: () => null,
          }}
        />
        <Stack.Screen
          name="NotificationView"
          component={NotificationView}
          options={{
            header: () => null,
          }}
        />
        <Stack.Screen
          name="MentalSupportView"
          component={MentalSupportView}
          options={{
            header: () => null,
          }}
        />
      </Stack.Navigator>
  )
}

export default HomeStackNavigator;