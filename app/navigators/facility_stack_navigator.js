import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import FacilityView from '../views/facilities/FacilityView';

const Stack = createNativeStackNavigator();

const ClinicStackNavigator = () => {
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
      </Stack.Navigator>
  )
}

export default ClinicStackNavigator;