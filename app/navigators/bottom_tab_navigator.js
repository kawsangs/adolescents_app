import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import HomeView from '../views/home/homeView';
import SettingView from '../views/settings/settingView';
import VideoView from '../views/videos/videoView';

const Tab = createMaterialBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeView}
        options={{
          tabBarIcon: ({focused, color}) => (<Icon name="home" color={color} size={25} />)
        }}
      />
      <Tab.Screen name="Videos" component={VideoView}
        options={{
          tabBarIcon: ({focused, color}) => (<Icon name="film" color={color} size={20} />)
        }}
      />
      <Tab.Screen name="Settings" component={SettingView}
        options={{
          tabBarIcon: ({focused, color}) => (<Icon name="gear" color={color} size={25} />)
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;