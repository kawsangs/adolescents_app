import React from 'react';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { useSelector } from 'react-redux';

import NavigationHeaderButtonComponent from './NavigationHeaderButtonComponent';
import color from '../../../themes/color';
import {navigationHeaderIconSize} from '../../../constants/component_constant';

const NavigationHeaderCloseButtonComponent = (props) => {
  const appTheme = useSelector(state => state.appTheme.value);
  return (
    <NavigationHeaderButtonComponent
      onPress={() => props.onPress()}
      icon={<FeatherIcon name="x" color={appTheme.primary_text_color ?? color.whiteColor} size={navigationHeaderIconSize} />}
    />
  )
}

export default NavigationHeaderCloseButtonComponent;