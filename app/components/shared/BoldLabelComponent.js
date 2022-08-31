import React from 'react';
import { Text } from 'react-native';
import { useTranslation } from 'react-i18next';

import { KM } from '../../constants/main_constant';
import { FontFamily } from '../../themes/font';
import color from '../../themes/color';
import {normalFontSize} from '../../utils/font_size_util';

// This component apply the fontFamily to Khmer language only because Koulen-Regular font will render
// the English text in uppercase only
const BoldLabelComponent = (props) => {
  const {i18n} = useTranslation();
  const styles = i18n.language == KM ?
    { fontWeight: 'normal', fontFamily: FontFamily.title }
  : { fontWeight: 'bold', fontFamily: null }

  return (
    <Text {...props} style={[{ color: color.lightBlackColor, fontSize: normalFontSize() },props.style, styles]}>
      {props.label}
    </Text>
  )
}

export default BoldLabelComponent;