import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {backgroundColors} from '../../themes/color';

const GradientViewComponent = (props) => {
  return (
    <LinearGradient
      colors={backgroundColors}
      start={{x: -0.28, y: 0.5}} end={{x: 1, y: 1}}
      style={props.style}
    >
      {props.children}
    </LinearGradient>
  )
}

export default GradientViewComponent;