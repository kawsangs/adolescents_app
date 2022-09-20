import React from 'react';

// import HomeHeaderTitleComponent from './HomeHeaderTitleComponent';
import NavigationHeaderComponent from '../shared/NavigationHeaderComponent';
import NavigationHeaderMenuButtonComponent from '../shared/navigationHeaders/NavigationHeaderMenuButtonComponent';
import ClinicNavigationHeaderRightButtonsComponent from './ClinicNavigationHeaderRightButtonsComponent';
// import NavigationHeaderTitleComponent from '../shared/NavigationHeaderTitleComponent';
// import NavigationHeaderNotificationButtonComponent from '../shared/navigationHeaders/NavigationHeaderNotificationButtonComponent';

const ClinicNavigationHeaderComponent = (props) => {
  return (
    <NavigationHeaderComponent
      leftButton={<NavigationHeaderMenuButtonComponent navigation={props.navigation}/>}
      label="ទីតាំង"
      rightButton={<ClinicNavigationHeaderRightButtonsComponent/>}
    />
  )
}

export default ClinicNavigationHeaderComponent;