import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ProfileView from '../views/profiles/ProfileView';
import DeleteAccountView from '../views/deleteAccounts/DeleteAccountView';

const Stack = createNativeStackNavigator();

const ProfileStackNavigator = () => {
  return (
     <Stack.Navigator
        initialRouteName='ProfileView'
      >
        <Stack.Screen
          name="ProfileView"
          component={ProfileView}
          options={{
            header: () => null,
          }}
        />
        <Stack.Screen
          name="DeleteAccountView"
          component={DeleteAccountView}
          options={{
            header: () => null,
          }}
        />
      </Stack.Navigator>
  )
}

export default ProfileStackNavigator;