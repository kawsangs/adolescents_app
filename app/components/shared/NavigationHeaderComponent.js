import React from 'react';
import {Appbar} from 'react-native-paper';
import NavigationHeaderTitleComponent from './navigationHeaders/NavigationHeaderTitleComponent';
import {navigationHeaderHorizontalPadding} from '../../constants/component_constant';

const NavigationHeaderComponent = (props) => {
  return (
    <Appbar.Header style={[{elevation: 0, paddingHorizontal: navigationHeaderHorizontalPadding}, props.headerStyle]}>
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