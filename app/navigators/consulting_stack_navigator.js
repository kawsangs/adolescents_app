import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import ConsultingView from '../views/consultings/ConsultingView';

const Stack = createNativeStackNavigator();

const ConsultingStackNavigator = () => {
  return (
     <Stack.Navigator
        initialRouteName='ConsultingView'
      >
        <Stack.Screen
          name="ConsultingView"
          component={ConsultingView}
          options={{
            header: () => null,
          }}
        />
      </Stack.Navigator>
  )
}

export default ConsultingStackNavigator;