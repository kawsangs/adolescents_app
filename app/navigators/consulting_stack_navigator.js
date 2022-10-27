import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import ConsultingView from '../views/consultings/ConsultingView';
import SubConsultingView from '../views/subConsultings/SubConsultingView';
import ConsultingDetailView from '../views/consultingDetails/ConsultingDetailView';

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
        <Stack.Screen
          name="SubConsultingView"
          component={SubConsultingView}
          options={{
            header: () => null,
          }}
        />
        <Stack.Screen
          name="ConsultingDetailView"
          component={ConsultingDetailView}
          options={{
            header: () => null,
          }}
        />
      </Stack.Navigator>
  )
}

export default ConsultingStackNavigator;