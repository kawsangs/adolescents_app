import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {useTranslation} from 'react-i18next';

import BoldLabelComponent from '../shared/BoldLabelComponent';
import color from '../../themes/color';
import {navigationHeaderIconSize} from '../../constants/component_constant';

const HomeHeaderTitleComponent = () => {
  const {t} = useTranslation();
  return (
    <View style={{flexDirection: 'row', flex: 1}}>
      <Image source={require('../../assets/images/header_icon.png')} style={styles.image} />
      <BoldLabelComponent label={t('myHealth')} style={styles.label} />
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    height: 'auto',
    width: navigationHeaderIconSize
  },
  label: {
    color: color.whiteColor,
    fontSize: 18,
    marginLeft: 8,
    textTransform: 'capitalize'
  }
});

export default HomeHeaderTitleComponent;