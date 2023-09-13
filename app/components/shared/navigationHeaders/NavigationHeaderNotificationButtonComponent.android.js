import React from 'react';
import {View} from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';

import NavigationHeaderButtonComponent from './NavigationHeaderButtonComponent';
import NotificationBadgeComponent from '../NotificationBadgeComponent';
import {navigationHeaderIconSize} from '../../../constants/component_constant';
import { navigationRef } from '../../../navigators/app_navigator';
import { useSelector } from 'react-redux';

const NavigationHeaderNotificationButtonComponent = (props) => {
  const unreadNotificationsCount = useSelector((state) => state.unreadNotifications.value)

  const renderIcon = () => {
    return (
      <View>
        { !!unreadNotificationsCount && <NotificationBadgeComponent notificationCount={unreadNotificationsCount}/> }

        <IonIcon name="notifications-outline" size={navigationHeaderIconSize} color="white"/>
      </View>
    )
  }

  return <NavigationHeaderButtonComponent
            // onPress={() => navigationRef.current?.navigate("NotificationView")}
            onPress={() => navigationRef.current?.navigate("SurveyView")}
            icon={ renderIcon() }
          />
}

export default NavigationHeaderNotificationButtonComponent;