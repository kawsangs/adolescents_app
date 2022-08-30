import React from 'react';
import { Animated, Text, StyleSheet } from 'react-native';

import color from '../../../themes/color';
import audioUtil from '../../../utils/audio_util';
import { smallFontSize } from '../../../utils/font_size_util';
import { screenPaddingHorizontal, headerWithAudioScrollDistance } from '../../../constants/component_constant';

const AudioDurationLabelComponent = (props) => {
  const labelPositionY = props.scrollY.interpolate({
    inputRange: [0, headerWithAudioScrollDistance],
    outputRange: [0, 6],
    extrapolate: 'clamp'
  });

  return <Animated.View style={[styles.secondsContainer, {transform: [{translateY: labelPositionY}]}]}>
            <Text style={styles.label}>{ audioUtil.getFormattedPlaySeconds(props.playSeconds) }</Text>
            <Text style={styles.label}>{ audioUtil.getReverseSeconds(props.playSeconds, props.duration) }</Text>
         </Animated.View>
}

const styles = StyleSheet.create({
  secondsContainer: {
    flexDirection: 'row',
    justifyContent:'space-between',
    paddingHorizontal: screenPaddingHorizontal,
  },
  label: {
    color: color.whiteColor,
    fontSize: smallFontSize()
  }
});

export default AudioDurationLabelComponent;