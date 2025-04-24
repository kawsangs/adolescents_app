import React from 'react';
import { Animated } from 'react-native';
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
        {paddingHorizontal: navigationHeaderHorizontalPadding, backgroundColor: 'transparent', zIndex: 1},
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
    ? (
        <Animated.View style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          overflow: 'hidden',
          zIndex: 1
        }}>
          <LinearGradient
            colors={!!appTheme ? [appTheme.secondary_color, appTheme.primary_color] : backgroundColors}
            start={{x: 0, y: -0.3}} end={{x: 1, y: 0}}
            style={{height: '100%', width: '100%'}}
          >
            {header()}
          </LinearGradient>
        </Animated.View>
      )
    : header();
}

export default NavigationHeaderComponent;