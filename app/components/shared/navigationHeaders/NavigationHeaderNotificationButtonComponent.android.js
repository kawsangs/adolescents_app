import React from 'react';
import IonIcon from 'react-native-vector-icons/Ionicons';

import NavigationHeaderButtonComponent from './NavigationHeaderButtonComponent';
import {navigationHeaderIconSize} from '../../../constants/component_constant';
import {navigationRef} from '../../../navigators/app_navigator';

const HomeHeaderNotificationButtonComponent = (props) => {
  return <NavigationHeaderButtonComponent
            onPress={() => navigationRef.current?.navigate("NotificationView")}
            icon={<IonIcon name="notifications-outline" size={navigationHeaderIconSize} color="white"/>}
          />
}

export default HomeHeaderNotificationButtonComponent;