import React from 'react';
import FeatherIcon from 'react-native-vector-icons/Feather';
import IonIcon from 'react-native-vector-icons/Ionicons';

import HomeHeaderPressableIconComponent from './HomeHeaderPressableIconComponent';

const HomeHeaderRightButtonsComponent = (props) => {
  return (
    <React.Fragment>
      <HomeHeaderPressableIconComponent btnStyle={{marginRight: 24}}>
        <FeatherIcon name="calendar"/>
      </HomeHeaderPressableIconComponent>
      <HomeHeaderPressableIconComponent>
        <IonIcon name="notifications-outline"/>
      </HomeHeaderPressableIconComponent>
    </React.Fragment>
  )
}

export default HomeHeaderRightButtonsComponent;