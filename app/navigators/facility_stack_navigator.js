import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import FacilityView from '../views/facilities/FacilityView';
import FacilityDetailView from '../views/facilityDetails/FacilityDetailView';

const Stack = createNativeStackNavigator();

const FacilitycStackNavigator = () => {
  return (
     <Stack.Navigator
        initialRouteName='FacilityView'
      >
        <Stack.Screen
          name="FacilityView"
          component={FacilityView}
          options={{
            header: () => null,
          }}
        />
        <Stack.Screen
          name="FacilityDetailView"
          component={FacilityDetailView}
          options={{
            header: () => null,
          }}
        />
      </Stack.Navigator>
  )
}

export default FacilitycStackNavigator;