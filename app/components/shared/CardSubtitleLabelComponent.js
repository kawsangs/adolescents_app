import React from 'react';
// import {Text, StyleSheet} from 'react-native';
import {StyleSheet} from 'react-native';
import {Text} from 'react-native-paper';

import color from '../../themes/color';
import {mediumFontSize, largeFontSize} from '../../utils/font_size_util';

const CardSubtitleLabelComponent = (props) => {
  return <Text {...props} style={[styles.label, props.labelStyle]}>
          {props.label}
        </Text>
}

const styles = StyleSheet.create({
  label: {
    color: '#333333',
    // fontSize: mediumFontSize(),
    fontSize: largeFontSize(),
    lineHeight: 22,
    fontWeight: '100'
  },
})

export default CardSubtitleLabelComponent;