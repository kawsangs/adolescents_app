import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ClinicView from '../views/clinics/ClinicView';

const Stack = createNativeStackNavigator();

const ClinicStackNavigator = () => {
  return (
     <Stack.Navigator
        initialRouteName='ClinicView'
      >
        <Stack.Screen
          name="ClinicView"
          component={ClinicView}
          options={{
            header: () => null,
          }}
        />
      </Stack.Navigator>
  )
}

export default ClinicStackNavigator;