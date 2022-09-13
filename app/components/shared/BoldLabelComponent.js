import React from 'react';
import { Text } from 'react-native';

import {FontFamily, fontFamily} from '../../themes/font';
import color from '../../themes/color';
import {mediumFontSize} from '../../utils/font_size_util';

// This component apply the fontFamily to Khmer language only because Koulen-Regular font will render
// the English text in uppercase only
const BoldLabelComponent = (props) => {
  return (
    <Text {...props} style={[{ color: color.lightBlackColor, fontFamily: FontFamily.bold, fontSize: mediumFontSize() }, props.style]}>
      {props.label}
    </Text>
  )
}

export default BoldLabelComponent;