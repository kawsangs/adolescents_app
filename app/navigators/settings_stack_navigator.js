import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SettingView from '../views/settings/SettingView';
import color from '../themes/color';

const Stack = createNativeStackNavigator();

const SettingsStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SettingScreen"
        component={SettingView}
        options={{
          title: 'Setting screen',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: color.primaryColor,
          },
          headerTitleStyle: {
            color: color.whiteColor
          }
        }}
      />
    </Stack.Navigator>
  )
}

export default SettingsStackNavigator;