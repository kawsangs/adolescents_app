import React from 'react';
import { Text } from 'react-native';
import { useTranslation } from 'react-i18next';

import { KM } from '../../constants/main_constant';
import { FontFamily } from '../../themes/font';

// This component apply the fontFamily to Khmer language only because Koulen-Regular font will render
// the English text in uppercase only
const BoldLabelComponent = (props) => {
  const {i18n} = useTranslation();
  const styles = i18n.language == KM ?
    { fontWeight: 'normal', fontFamily: FontFamily.title }
  : { fontWeight: 'bold', fontFamily: null }

  return (
    <Text style={[props.style, styles]}>
      {props.label}
    </Text>
  )
}

export default BoldLabelComponent;