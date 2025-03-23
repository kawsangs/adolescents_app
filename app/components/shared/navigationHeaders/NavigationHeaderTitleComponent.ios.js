import React from 'react';
import {View, StyleSheet} from 'react-native';
import { useSelector } from 'react-redux';

import BoldLabelComponent from '../BoldLabelComponent';
import color from '../../../themes/color';
import {xxLargeFontSize} from '../../../utils/font_size_util';

const NavigationHeaderTitleComponent = (props) => {
  const appTheme = useSelector(state => state.appTheme.value);
  return (
    <View style={styles.container}>
      <BoldLabelComponent label={props.label}
        style={[styles.label, {color: appTheme.primary_text_color ?? color.whiteColor}]}
        numberOfLines={1}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderWidth: 0,
    flexDirection: 'row',
    flex: 1,
    height: '100%',
  },
  label: {
    fontSize: xxLargeFontSize(),
    lineHeight: 34,
    textTransform: 'capitalize',
    width: '90%'
  }
});

export default NavigationHeaderTitleComponent;