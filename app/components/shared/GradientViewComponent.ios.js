import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import color from '../../themes/color';

const GradientViewComponent = (props) => {
  return (
    <LinearGradient
      colors={[color.primaryColor, 'rgba(170, 73, 133, 0.88)']}
      start={{x: 0, y: 0}} end={{x: 1, y: 1}}
      style={props.style}
    >
      {props.children}
    </LinearGradient>
  )
}

export default GradientViewComponent;