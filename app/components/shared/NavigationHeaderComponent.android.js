import React from 'react';
import {Appbar} from 'react-native-paper';
import NavigationHeaderTitleComponent from './navigationHeaders/NavigationHeaderTitleComponent';
import {navigationHeaderHorizontalPadding} from '../../constants/component_constant';
import color from '../../themes/color';

const NavigationHeaderComponent = (props) => {
  return (
    <Appbar.Header style={[{paddingHorizontal: navigationHeaderHorizontalPadding, backgroundColor: color.primaryColor}, props.headerStyle]}>
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