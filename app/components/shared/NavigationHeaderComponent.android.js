import React from 'react';
import {Appbar} from 'react-native-paper';
import { useSelector } from 'react-redux';

import NavigationHeaderTitleComponent from './navigationHeaders/NavigationHeaderTitleComponent';
import {navigationHeaderHorizontalPadding} from '../../constants/component_constant';
import color from '../../themes/color';

const NavigationHeaderComponent = (props) => {
  const appTheme = useSelector(state => state.appTheme.value);

  return (
    <Appbar.Header style={[
      {paddingHorizontal: navigationHeaderHorizontalPadding, backgroundColor: appTheme.primary_color ?? color.primaryColor, zIndex: 1},
      props.headerStyle
    ]}>
      { props.leftButton }
      { !!props.customTitle ?
        props.customTitle
        :
        <NavigationHeaderTitleComponent label={props.label} />
      }
      { !!props.rightButton && props.rightButton }
    </Appbar.Header>
  )
}

export default NavigationHeaderComponent;