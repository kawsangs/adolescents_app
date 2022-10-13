import React from 'react';
import {View, StyleSheet} from 'react-native';

import BoldLabelComponent from '../BoldLabelComponent';
import color from '../../../themes/color';
import {xxLargeFontSize} from '../../../utils/font_size_util';

const NavigationHeaderTitleComponent = (props) => {
  return (
    <View style={styles.container}>
      <BoldLabelComponent label={props.label} style={styles.label} numberOfLines={1} />
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
    color: color.whiteColor,
    fontSize: xxLargeFontSize(),
    textTransform: 'capitalize',
    width: '90%'
  }
});

export default NavigationHeaderTitleComponent;