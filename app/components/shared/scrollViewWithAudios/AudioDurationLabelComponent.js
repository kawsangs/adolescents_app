import React from 'react';
import { Animated, Text, StyleSheet } from 'react-native';
import {useTranslation} from 'react-i18next';

import color from '../../../themes/color';
import audioUtil from '../../../utils/audio_util';
import {mediumFontSize} from '../../../utils/font_size_util';
import translationUtil from '../../../utils/translation_util';
import { screenPaddingHorizontal, headerWithAudioScrollDistance } from '../../../constants/component_constant';

const AudioDurationLabelComponent = (props) => {
  const {i18n} = useTranslation();
  const labelPositionY = props.scrollY.interpolate({
    inputRange: [0, headerWithAudioScrollDistance],
    outputRange: [0, 6],
    extrapolate: 'clamp'
  });

  const playSeconds = audioUtil.getFormattedPlaySeconds(props.playSeconds);
  const reversePlaySeconds = audioUtil.getReverseSeconds(props.playSeconds, props.duration);

  return <Animated.View style={[styles.secondsContainer, {transform: [{translateY: labelPositionY}]}]}>
            <Text style={styles.label}>{ translationUtil.translateNumber(playSeconds, i18n.language) }</Text>
            <Text style={styles.label}>{ translationUtil.translateNumber(reversePlaySeconds, i18n.language) }</Text>
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
    fontSize: mediumFontSize()
  }
});

export default AudioDurationLabelComponent;