import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {useTranslation} from 'react-i18next';

import homeNavigator from './home_navigator';
import VideoView from '../views/videos/VideoView';
import TabBarItemComponent from '../components/bottomTabNavigator/TabBarItemComponent';
import color from '../themes/color';

const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
  const { t } = useTranslation();
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: color.secondaryColor,
        tabBarInactiveTintColor: color.primaryColor,
        tabBarShowLabel: false
      }}
    >
      <Tab.Screen
        name="Home"
        component={homeNavigator}
        options={{
          tabBarIcon: ({focused, color, size}) => <TabBarItemComponent focused={focused} icon='home' color={color} size={size} label={t('home')} />,
          tabBarItemStyle: [styles.tabBarItem, styles.tabBarLeftItem],
          headerShown: false
        }}
      />
      <Tab.Screen
        name="Video"
        component={VideoView}
        options={{
          tabBarIcon: ({focused, color, size}) => <TabBarItemComponent focused={focused} icon='youtube' color={color} size={size} label={t('video')} />,
          tabBarItemStyle: styles.tabBarItem,
        }}
      />
      <Tab.Screen
        name="Map"
        component={VideoView}
        options={{
          tabBarLabel: t('map'),
          tabBarIcon: ({focused, color, size}) => <TabBarItemComponent focused={focused} icon='map' color={color} size={size} label={t('map')} />,
          tabBarItemStyle: styles.tabBarItem,
        }}
      />
      <Tab.Screen
        name="Consult"
        component={VideoView}
        options={{
          tabBarLabel: t('consult'),
          tabBarIcon: ({focused, color, size}) => <TabBarItemComponent focused={focused} icon='message-square' color={color} size={size} label={t('consult')} />,
          tabBarItemStyle: [styles.tabBarItem, styles.tabBarRightItem],
        }}
      />
    </Tab.Navigator>
  )
}
const BORDER_RADIUS = 12;
const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: color.primaryColor,
    borderTopWidth: 0,
    elevation: 0,
    height: 62,
    paddingBottom: 6,
    paddingHorizontal: 8,
  },
  tabBarItem: {
    backgroundColor: color.whiteColor,
  },
  tabBarLeftItem: {
    borderBottomLeftRadius: BORDER_RADIUS,
    borderTopLeftRadius: BORDER_RADIUS,
    marginRight: -1
  },
  tabBarRightItem: {
    borderBottomRightRadius: BORDER_RADIUS,
    borderTopRightRadius: BORDER_RADIUS
  }
});

export default BottomTabNavigator;