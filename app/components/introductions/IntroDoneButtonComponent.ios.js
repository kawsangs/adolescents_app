import React from 'react';
import {View, StyleSheet} from 'react-native';
import { useTranslation } from 'react-i18next';

import IntroPressableLabelComponent from './IntroPressableLabelComponent';
import color from '../../themes/color';
import componentUtil from '../../utils/component_util';
import {getStyleOfDevice} from '../../utils/responsive_util';
import sharedStyles from '../../assets/stylesheets/shared/sharedStyles';

const IntroDoneButtonComponent = (props) => {
  const { t } = useTranslation();
  return (
    <View style={[styles.container, sharedStyles.boxShadow]}>
      <IntroPressableLabelComponent label={ t('startUsingApp') } labelStyle={{color: color.whiteColor}} containerStyle={{width: '100%'}} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: color.primaryColor,
    borderRadius: 40,
    elevation: 4,
    height: getStyleOfDevice(componentUtil.tabletPressableItemSize(), componentUtil.mediumPressableItemSize()),
    justifyContent: 'center',
    width: '60%'
  }
});

export default IntroDoneButtonComponent;