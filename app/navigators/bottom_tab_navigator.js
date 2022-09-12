import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {useTranslation} from 'react-i18next';

import homeNavigator from './home_navigator';
import VideoView from '../views/videos/VideoView';
import TabBarItemComponent from '../components/bottomTabNavigator/TabBarItemComponent';
import color from '../themes/color';
import {getStyleOfDevice} from '../utils/responsive_util';
import tabletStyles from '../assets/stylesheets/tablet/bottomTabNavigatorStyles';
import mobileStyles from '../assets/stylesheets/mobile/bottomTabNavigatorStyles';

const styles = getStyleOfDevice(tabletStyles, mobileStyles);

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

export default BottomTabNavigator;