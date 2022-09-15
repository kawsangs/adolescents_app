import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import BottomTabNavigator from './bottom_tab_navigator';
import DrawerNavigatorComponent from '../components/drawerNavigators/DrawerNavigatorComponent';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="BottomTabs"
      screenOptions={{
        header: () => null,
        drawerStyle: {
          backgroundColor: 'transparent',
        },
      }}
      drawerContent={(props) => <DrawerNavigatorComponent navigation={props.navigation} />}
    >
      <Drawer.Screen name="BottomTabs" component={BottomTabNavigator} />
    </Drawer.Navigator>
  )
}

export default DrawerNavigator;