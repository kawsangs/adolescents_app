import React from 'react';

import HomeHeaderTitleComponent from './HomeHeaderTitleComponent';
import NavigationHeaderComponent from '../shared/NavigationHeaderComponent';
import NavigationHeaderMenuButtonComponent from '../shared/navigationHeaders/NavigationHeaderMenuButtonComponent';
import NavigationHeaderNotificationButtonComponent from '../shared/navigationHeaders/NavigationHeaderNotificationButtonComponent';

const HomeNavigationHeader = (props) => {
  return (
    <NavigationHeaderComponent
      leftButton={<NavigationHeaderMenuButtonComponent navigation={props.navigation}/>}
      customTitle={<HomeHeaderTitleComponent/>}
      // rightButton={<NavigationHeaderNotificationButtonComponent/>}
    />
  )
}

export default HomeNavigationHeader;