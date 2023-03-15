import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {useTranslation} from 'react-i18next';

import HomeStackNavigator from './home_stack_navigator';
import VideoView from '../views/videos/VideoView';
import TopicStackNavigator from './topic_stack_navigator';
import FacilityView from '../views/facilities/FacilityView';
import TabBarItemComponent from '../components/bottomTabNavigator/TabBarItemComponent';
import color from '../themes/color';
import {getStyleOfDevice} from '../utils/responsive_util';
import tabletStyles from '../assets/stylesheets/tablet/bottomTabNavigatorStyles';
import mobileStyles from '../assets/stylesheets/mobile/bottomTabNavigatorStyles';
import {tabVisitParams} from '../constants/bottom_tab_constant';
import visitService from '../services/visit_service';

const styles = getStyleOfDevice(tabletStyles, mobileStyles);

const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
  const { t } = useTranslation();
  return (
    <Tab.Navigator
      initialRouteName="HomeViewStack"
      screenOptions={{
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: color.secondaryColor,
        tabBarInactiveTintColor: color.primaryColor,
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true
      }}
    >
      <Tab.Screen
        name="HomeViewStack"
        component={HomeStackNavigator}
        options={{
          tabBarIcon: ({focused, color, size}) => <TabBarItemComponent focused={focused} icon='home' color={color} size={size} label={t('home')} />,
          tabBarItemStyle: [styles.tabBarItem, styles.tabBarLeftItem],
          headerShown: false,
          tabBarStyle: {display: 'none'}
        }}
        listeners={({ navigation }) => ({
          tabPress: (event) => {
            event.preventDefault();
            navigation.reset({ index: 0, routes: [{ name: "HomeViewStack" }]})
          }
        })}
      />
      <Tab.Screen
        name="VideoView"
        component={VideoView}
        options={{
          tabBarIcon: ({focused, color, size}) => <TabBarItemComponent focused={focused} icon='youtube' color={color} size={size} label={t('video')} />,
          tabBarItemStyle: styles.tabBarItem,
          headerShown: false,
        }}
        listeners={({ navigation }) => ({
          tabPress: (event) => {
            event.preventDefault();
            visitService.recordVisitAction(tabVisitParams.video)
            navigation.reset({ index: 0, routes: [{ name: "VideoView" }]})
          }
        })}
      />
      <Tab.Screen
        name="FacilityView"
        component={FacilityView}
        options={{
          tabBarLabel: t('clinic'),
          tabBarIcon: ({focused, color, size}) => <TabBarItemComponent focused={focused} icon='map-pin' color={color} size={size} label={t('clinic')} />,
          tabBarItemStyle: styles.tabBarItem,
          headerShown: false,
        }}
        listeners={({ navigation }) => ({
          tabPress: (event) => {
            event.preventDefault();
            visitService.recordVisitAction(tabVisitParams.service)
            navigation.reset({ index: 0, routes: [{ name: "FacilityView" }]})
          }
        })}
      />
      <Tab.Screen
        name="TopicViewStack"
        component={TopicStackNavigator}
        options={{
          tabBarLabel: t('help'),
          tabBarIcon: ({focused, color, size}) => <TabBarItemComponent focused={focused} icon='message-square' color={color} size={size} label={t('help')} />,
          tabBarItemStyle: [styles.tabBarItem, styles.tabBarRightItem],
          headerShown: false,
        }}
        listeners={({ navigation }) => ({
          tabPress: (event) => {
            event.preventDefault();
            visitService.recordVisitAction(tabVisitParams.help)
            navigation.reset({ index: 0, routes: [{ name: "TopicViewStack" }]})
          }
        })}
      />
    </Tab.Navigator>
  )
}

export default BottomTabNavigator;