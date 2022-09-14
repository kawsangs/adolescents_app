import React from 'react';

import HomeHeaderTitleComponent from './HomeHeaderTitleComponent';
import NavigationHeaderComponent from '../shared/NavigationHeaderComponent';
import NavigationHeaderMenuButtonComponent from '../shared/navigationHeaders/NavigationHeaderMenuButtonComponent';
import NavigationHeaderNotificationButtonComponent from '../shared/navigationHeaders/NavigationHeaderNotificationButtonComponent';

const HomeNavigationHeader = () => {
  return (
    <NavigationHeaderComponent
      leftButton={<NavigationHeaderMenuButtonComponent/>}
      customTitle={<HomeHeaderTitleComponent/>}
      rightButton={<NavigationHeaderNotificationButtonComponent/>}
    />
  )
}

export default HomeNavigationHeader;