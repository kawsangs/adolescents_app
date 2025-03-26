import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {useTranslation} from 'react-i18next';
import {useSelector} from 'react-redux';

import BoldLabelComponent from '../shared/BoldLabelComponent';
import color from '../../themes/color';
import {xxLargeFontSize} from '../../utils/font_size_util';

const HomeHeaderTitleComponent = () => {
  const {t} = useTranslation();
  const appTheme = useSelector(state => state.appTheme.value);
  return (
    <View style={{flexDirection: 'row', flex: 1, height: '100%', alignItems: 'center'}}>
      <Image source={require('../../assets/images/logo.png')} style={styles.image} />
      <BoldLabelComponent label={t('youthHealth')} style={[styles.label, { color: appTheme.primary_text_color ?? color.whiteColor }]} />
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    height: 30,
    width: 24,
  },
  label: {
    fontSize: xxLargeFontSize(),
    marginLeft: 8,
    textTransform: 'capitalize'
  }
});

export default HomeHeaderTitleComponent;