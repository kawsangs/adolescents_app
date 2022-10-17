import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {useTranslation} from 'react-i18next';

import BoldLabelComponent from '../shared/BoldLabelComponent';
import color from '../../themes/color';
import {xxLargeFontSize} from '../../utils/font_size_util';

const HomeHeaderTitleComponent = () => {
  const {t} = useTranslation();
  return (
    <View style={{flexDirection: 'row', flex: 1, height: '100%', alignItems: 'center'}}>
      <Image source={require('../../assets/images/logo.png')} style={styles.image} />
      <BoldLabelComponent label={t('youthHealth')} style={styles.label} />
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    height: 36,
    width: 32,
  },
  label: {
    color: color.whiteColor,
    fontSize: xxLargeFontSize(),
    marginLeft: 8,
    textTransform: 'capitalize'
  }
});

export default HomeHeaderTitleComponent;