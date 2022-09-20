import React from 'react';

import NavigationHeaderComponent from '../shared/NavigationHeaderComponent';
import NavigationHeaderMenuButtonComponent from '../shared/navigationHeaders/NavigationHeaderMenuButtonComponent';
import FacilityNavigationHeaderRightButtonsComponent from './FacilityNavigationHeaderRightButtonsComponent';

const FacilityNavigationHeaderComponent = (props) => {
  return (
    <NavigationHeaderComponent
      leftButton={<NavigationHeaderMenuButtonComponent navigation={props.navigation}/>}
      label="ទីតាំង"
      rightButton={<FacilityNavigationHeaderRightButtonsComponent/>}
    />
  )
}

export default FacilityNavigationHeaderComponent;