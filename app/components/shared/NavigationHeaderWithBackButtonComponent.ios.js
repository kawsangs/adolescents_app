import React from 'react';

import NavigationHeaderComponent from './NavigationHeaderComponent';
import NavigationHeaderBackButtonComponent from './NavigationHeaderBackButtonComponent';

const NavigationHeaderWithBackButtonComponent = (props) => {
  return (
      <NavigationHeaderComponent
        leftButton={<NavigationHeaderBackButtonComponent/>}
        label={props.label}
        headerStyle={props.headerStyle}
      />
    )
}

export default NavigationHeaderWithBackButtonComponent;