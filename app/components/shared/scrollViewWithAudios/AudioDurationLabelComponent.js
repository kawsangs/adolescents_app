import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import color from '../../../themes/color';
import audioUtil from '../../../utils/audio_util';
import { smallFontSize } from '../../../utils/font_size_util';
import { screenPaddingHorizontal } from '../../../constants/component_constant';

const AudioDurationLabelComponent = (props) => {
  return <View style={styles.secondsContainer}>
            <Text style={styles.label}>{ audioUtil.getFormattedPlaySeconds(props.playSeconds) }</Text>
            <Text style={styles.label}>{ audioUtil.getReverseSeconds(props.playSeconds, props.duration) }</Text>
         </View>
}

const styles = StyleSheet.create({
  secondsContainer: {
    flexDirection: 'row',
    justifyContent:'space-between',
    paddingHorizontal: screenPaddingHorizontal
  },
  label: {
    color: color.whiteColor,
    fontSize: smallFontSize()
  }
});

export default AudioDurationLabelComponent;