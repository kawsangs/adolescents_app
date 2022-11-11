import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeView from '../views/home/HomeView';
import SubCategoryView from '../views/subCategories/SubCategoryView';
import LeafCategoryView from '../views/leafCategories/LeafCategoryView';
import LeafCategoryDetailView from '../views/leafCategoryDetails/LeafCategoryDetailView';
import NotificationView from '../views/notifications/NotificationView';

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
          name="LeafCategoryDetailView"
          component={LeafCategoryDetailView}
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
      </Stack.Navigator>
  )
}

export default HomeStackNavigator;