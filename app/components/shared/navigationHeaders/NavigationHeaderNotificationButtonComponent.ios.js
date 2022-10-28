import React from 'react';
import IonIcon from 'react-native-vector-icons/Ionicons';

import NavigationHeaderButtonComponent from './NavigationHeaderButtonComponent';
import {navigationHeaderIconSize} from '../../../constants/component_constant';

const HomeHeaderNotificationButtonComponent = (props) => {
  return <NavigationHeaderButtonComponent
            icon={<IonIcon name="notifications-outline" size={navigationHeaderIconSize} color="white"/>}
          />
}

export default HomeHeaderNotificationButtonComponent;