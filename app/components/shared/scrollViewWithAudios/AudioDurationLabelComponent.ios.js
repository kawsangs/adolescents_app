import React from 'react';
import { Animated, Text, StyleSheet } from 'react-native';
import {useTranslation} from 'react-i18next';

import color from '../../../themes/color';
import audioUtil from '../../../utils/audio_util';
import {mediumFontSize} from '../../../utils/font_size_util';
import translationHelper from '../../../helpers/translation_helper';
import { screenHorizontalPadding } from '../../../constants/component_constant';
import {headerWithAudioScrollDistance} from '../../../constants/ios_component_constant';

const AudioDurationLabelComponent = (props) => {
  const {t, i18n} = useTranslation();
  const labelPositionY = props.scrollY.interpolate({
    inputRange: [0, headerWithAudioScrollDistance],
    outputRange: [0, 5],
    extrapolate: 'clamp'
  });

  const playSeconds = audioUtil.getFormattedPlaySeconds(props.playSeconds);
  const reversePlaySeconds = audioUtil.getReverseSeconds(props.playSeconds, props.duration);

  return <Animated.View style={[styles.secondsContainer, {transform: [{translateY: labelPositionY}]}]}>
            <Text style={styles.label}>{ translationHelper.translateNumber(playSeconds, t) }</Text>
            <Text style={styles.label}>{ translationHelper.translateNumber(reversePlaySeconds, t) }</Text>
         </Animated.View>
}

const styles = StyleSheet.create({
  secondsContainer: {
    flexDirection: 'row',
    justifyContent:'space-between',
    paddingHorizontal: screenHorizontalPadding,
  },
  label: {
    color: color.whiteColor,
    fontSize: mediumFontSize(),
  }
});

export default AudioDurationLabelComponent;