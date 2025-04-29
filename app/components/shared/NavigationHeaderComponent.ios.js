import React from 'react';
import {Appbar} from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import { useSelector } from 'react-redux';
import {backgroundColors} from '../../themes/color';

import NavigationHeaderTitleComponent from './navigationHeaders/NavigationHeaderTitleComponent';
import {navigationHeaderHorizontalPadding} from '../../constants/component_constant';

const NavigationHeaderComponent = (props) => {
  const appTheme = useSelector(state => state.appTheme.value);

  const header = () => {
    return (
      <Appbar.Header style={[
        {elevation: 0, paddingHorizontal: navigationHeaderHorizontalPadding, backgroundColor: 'transparent', zIndex: 1},
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

  return props.hasBackgroundColor
    ? <LinearGradient
        colors={!!appTheme ? [appTheme.secondary_color, appTheme.primary_color] : backgroundColors}
        start={{x: 0, y: -0.3}} end={{x: 1, y: 0}}
      >
        {header()}
      </LinearGradient>
    : header();
}

export default NavigationHeaderComponent;
