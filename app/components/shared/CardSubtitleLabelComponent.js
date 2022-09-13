import React from 'react';
import {Text, StyleSheet} from 'react-native';

import color from '../../themes/color';
import {mediumFontSize} from '../../utils/font_size_util';

const CardSubtitleLabelComponent = (props) => {
  return <Text {...props} style={[styles.label, props.labelStyle]}>
          {props.label}
        </Text>
}

const styles = StyleSheet.create({
  label: {
    color: color.blackColor,
    fontSize: mediumFontSize()
  },
})

export default CardSubtitleLabelComponent;