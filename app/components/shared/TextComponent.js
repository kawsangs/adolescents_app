import React from 'react';
import {Text} from 'react-native';
import {FontFamily} from '../../themes/font';

const TextComponent = (props) => {
  return <Text style={[{fontFamily: FontFamily.body, letterSpacing: -1}, props.style]}>
            { props.label }
         </Text>
}

export default TextComponent;