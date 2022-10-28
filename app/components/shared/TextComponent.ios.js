import React from 'react';
import {Text} from 'react-native';
import {FontFamily} from '../../themes/font';
import color from '../../themes/color';

const TextComponent = (props) => {

  
  return <Text style={[{fontFamily: FontFamily.regular}, props.style]}>
            { props.label }
            { props.required && <Text style={{color: props.requiredColor || color.requiredColor}}> *</Text> }
         </Text>
}

export default TextComponent;
