import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {useTranslation} from 'react-i18next';

import HomeStackNavigator from './home_stack_navigator';
import VideoStackNavigator from './video_stack_navigator';
import FacilityStackNavigator from './facility_stack_navigator';
import TopicStackNavigator from './topic_stack_navigator';
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
        tabBarShowLabel: false
      }}
    >
      <Tab.Screen
        name="HomeViewStack"
        component={HomeStackNavigator}
        options={{
          tabBarIcon: ({focused, color, size}) => <TabBarItemComponent focused={focused} icon='home' color={color} size={size} label={t('home')} />,
          tabBarItemStyle: [styles.tabBarItem, styles.tabBarLeftItem],
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="VideoViewStack"
        component={VideoStackNavigator}
        options={{
          tabBarIcon: ({focused, color, size}) => <TabBarItemComponent focused={focused} icon='youtube' color={color} size={size} label={t('video')} />,
          tabBarItemStyle: styles.tabBarItem,
          headerShown: false,
        }}
        listeners={{
          tabPress: () => { visitService.recordVisitAction(tabVisitParams.video) }
        }}
      />
      <Tab.Screen
        name="FacilityViewStack"
        component={FacilityStackNavigator}
        options={{
          tabBarLabel: t('service'),
          tabBarIcon: ({focused, color, size}) => <TabBarItemComponent focused={focused} icon='map-pin' color={color} size={size} label={t('service')} />,
          tabBarItemStyle: styles.tabBarItem,
          headerShown: false,
        }}
        listeners={{
          tabPress: () => { visitService.recordVisitAction(tabVisitParams.service) }
        }}
      />
      <Tab.Screen
        name="TopicViewStack"
        component={TopicStackNavigator}
        options={{
          tabBarLabel: t('consult'),
          tabBarIcon: ({focused, color, size}) => <TabBarItemComponent focused={focused} icon='message-square' color={color} size={size} label={t('consult')} />,
          tabBarItemStyle: [styles.tabBarItem, styles.tabBarRightItem],
          headerShown: false,
        }}
        listeners={{
          tabPress: () => { visitService.recordVisitAction(tabVisitParams.consulting) }
        }}
      />
    </Tab.Navigator>
  )
}

export default BottomTabNavigator;