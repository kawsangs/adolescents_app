import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import BottomTabNavigator from './bottom_tab_navigator';
import DrawerNavigatorComponent from '../components/drawerNavigators/DrawerNavigatorComponent';
import AboutUsView from '../views/aboutUs/AboutUsView';
import ProfileStackNavigator from './profile_stack_navigator';

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
      <Drawer.Screen name="AboutUsView" component={AboutUsView} />
      <Drawer.Screen name="ProfileView" component={ProfileStackNavigator} />
    </Drawer.Navigator>
  )
}

export default DrawerNavigator;