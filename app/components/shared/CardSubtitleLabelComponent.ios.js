import React from 'react';
import {StyleSheet} from 'react-native';
import {Text} from 'react-native-paper';

import color from '../../themes/color';
import {descriptionFontSize} from '../../constants/component_constant';

const CardSubtitleLabelComponent = (props) => {
  return <Text {...props} style={[styles.label, props.labelStyle]}>
          {props.label}
        </Text>
}

const styles = StyleSheet.create({
  label: {
    color: color.blackColor,
    fontSize: descriptionFontSize,
    lineHeight: 24,
    fontWeight: '100'
  },
})

export default CardSubtitleLabelComponent;