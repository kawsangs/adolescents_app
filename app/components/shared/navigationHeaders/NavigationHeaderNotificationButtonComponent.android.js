import React from 'react';
import {View} from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';
import { useFocusEffect } from '@react-navigation/native';

import NavigationHeaderButtonComponent from './NavigationHeaderButtonComponent';
import NotificationBadgeComponent from '../NotificationBadgeComponent';
import {navigationHeaderIconSize} from '../../../constants/component_constant';
import { navigationRef } from '../../../navigators/app_navigator';
import { useSelector, useDispatch } from 'react-redux';
import { setUnreadNotification } from '../../../features/notifications/unreadNotificationsSlice'

const NavigationHeaderNotificationButtonComponent = (props) => {
  const unreadNotificationsCount = useSelector((state) => state.unreadNotifications.value)
  const dispatch = useDispatch()

  useFocusEffect(() => {
    dispatch(setUnreadNotification());
  });


  const renderIcon = () => {
    return (
      <View>
        { !!unreadNotificationsCount && <NotificationBadgeComponent notificationCount={unreadNotificationsCount}/> }

        <IonIcon name="notifications-outline" size={navigationHeaderIconSize} color="white"/>
      </View>
    )
  }

  return <NavigationHeaderButtonComponent
            onPress={() => navigationRef.current?.navigate("NotificationView")}
            // onPress={() => navigationRef.current?.navigate("SurveyView")}
            icon={ renderIcon() }
          />
}

export default NavigationHeaderNotificationButtonComponent;