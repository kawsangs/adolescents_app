import React from 'react';
import {View} from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';

import NavigationHeaderButtonComponent from './NavigationHeaderButtonComponent';
import {navigationHeaderIconSize} from '../../../constants/component_constant';
import { navigationRef } from '../../../navigators/app_navigator';
import { useSelector } from 'react-redux';

const HomeHeaderNotificationButtonComponent = (props) => {
  const unreadNotificationsCount = useSelector((state) => state.unreadNotifications.value)

  const renderIcon = () => {
    return (
      <View>
        { !!unreadNotificationsCount && <View style={{position: 'absolute', right: 0, top: 0, zIndex: 1, width: 8, height: 8, borderRadius: 4, backgroundColor: '#fff'}}/> }

        <IonIcon name="notifications-outline" size={navigationHeaderIconSize} color="white"/>
      </View>
    )
  }

  return <NavigationHeaderButtonComponent
            onPress={() => navigationRef.current?.navigate("NotificationView")}
            icon={ renderIcon() }
          />
}

export default HomeHeaderNotificationButtonComponent;