import React from 'react';
import { Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';

import { FontFamily } from '../../themes/font';
import { KM } from '../../constants/main_constant';
import { getStyleOfDevice } from '../../utils/responsive_util';
import tabletStyles from '../../assets/stylesheets/tablet/introPressableLabelComponentStyles';
import mobileStyles from '../../assets/stylesheets/mobile/introPressableLabelComponentStyles';

const styles = getStyleOfDevice(tabletStyles, mobileStyles);

const IntroPressableLabelComponent = (props) => {
  const {i18n} = useTranslation();

  return (
    <View style={[styles.container, props.containerStyle]}>
      <Text style={[styles.label, { fontFamily: i18n.language == KM ? FontFamily.title : null }]}>
        { props.label }
      </Text>
    </View>
  )
}

export default IntroPressableLabelComponent;