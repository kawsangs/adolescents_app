import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { useSelector } from 'react-redux';
import {backgroundColors} from '../../themes/color';

const GradientViewComponent = (props) => {
  const appTheme = useSelector(state => state.appTheme.value);
  return (
    <LinearGradient
      colors={!!appTheme ? [appTheme.secondary_color, appTheme.primary_color] : backgroundColors}
      start={{x: -0.28, y: 0.5}} end={{x: 1, y: 1}}
      style={props.style}
    >
      {props.children}
    </LinearGradient>
  )
}

export default GradientViewComponent;