import React from 'react';
import { Text } from 'react-native';

import {FontFamily} from '../../themes/font';
import color from '../../themes/color';
import {mediumFontSize} from '../../utils/font_size_util';

// This component apply the fontFamily to Khmer language only because Koulen-Regular font will render
// the English text in uppercase only
const BoldLabelComponent = (props) => {
  return (
    <Text {...props} style={[{ color: color.lightBlackColor, fontSize: mediumFontSize(), fontFamily: FontFamily.bold, lineHeight: 28 }, props.style]}>
      {props.label}
    </Text>
  )
}

export default BoldLabelComponent;