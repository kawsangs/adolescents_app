import React from 'react';

import NavigationHeaderComponent from './NavigationHeaderComponent';
import NavigationHeaderBackButtonComponent from './NavigationHeaderBackButtonComponent';

const NavigationHeaderWithBackButtonComponent = (props) => {
  return (
      <NavigationHeaderComponent
        leftButton={<NavigationHeaderBackButtonComponent onPress={props.onPress}/>}
        customTitle={props.customTitle}
        label={props.label}
        headerStyle={props.headerStyle}
      />
    )
}

export default NavigationHeaderWithBackButtonComponent;