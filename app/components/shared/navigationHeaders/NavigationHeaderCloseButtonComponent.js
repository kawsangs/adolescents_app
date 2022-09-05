import React from 'react';
import FeatherIcon from 'react-native-vector-icons/Feather';

import NavigationHeaderButtonComponent from './NavigationHeaderButtonComponent';
import color from '../../../themes/color';
import {navigationHeaderIconSize} from '../../../constants/component_constant';

const NavigationHeaderCloseButtonComponent = () => {
  return (
    <NavigationHeaderButtonComponent
      icon={<FeatherIcon name="x" color={color.whiteColor} size={navigationHeaderIconSize} />}
    />
  )
}

export default NavigationHeaderCloseButtonComponent;