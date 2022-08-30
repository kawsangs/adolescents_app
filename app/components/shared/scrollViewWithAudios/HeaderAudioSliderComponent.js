import React from 'react';
import { View, StyleSheet } from 'react-native';
import {Slider} from '@miblanchard/react-native-slider';

import color from '../../../themes/color';
import componentUtil from '../../../utils/component_util';
import { headerWithAudioScrollDistance, screenPaddingHorizontal } from '../../../constants/component_constant';
import audioPlayerService from '../../../services/audio_player_service';

const HeaderAudioSliderComponent = (props) => {
  const thumbSize = props.scrollY.interpolate({
    inputRange: [0, headerWithAudioScrollDistance],
    outputRange: [20, 16],
    extrapolate: 'clamp',
  });

  const onSlidingComplete = (value) => {
    // Seek and resume play the audio after stop sliding
    audioPlayerService.seekTo(props.audioPlayer, value[0]);
    audioPlayerService.playPause(props.audioPlayer, null,
      (audioPlayer, playSeconds, duration, countInterval) => {
        props.updateAudioPlayer(audioPlayer, playSeconds, duration, countInterval);
      }
    );
  }

  const onSlidingStart = () => {
    clearInterval(props.countInterval);
    if (!props.audioPlayer)
      return;

    props.audioPlayer.pause();
  }

  return (
    <View style={styles.sliderContainer}>
      <Slider
        value={props.playSeconds}
        disabled={props.playSeconds == props.duration}
        minimumValue={0}
        maximumValue={props.duration}
        maximumTrackTintColor={color.lightGrayColor}
        minimumTrackTintColor={color.pinkColor}
        containerStyle={{top: -22}}
        thumbTouchSize={{ width: componentUtil.pressableItemSize(), height: componentUtil.pressableItemSize() }}
        thumbStyle={{backgroundColor: color.whiteColor, borderColor: color.pinkColor, borderWidth: 2.5, width: thumbSize, height: thumbSize }}
        trackStyle={{height: 4}}
        onSlidingComplete={(value) => onSlidingComplete(value)}
        onSlidingStart={(value) => onSlidingStart()}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  sliderContainer: {
    paddingHorizontal: screenPaddingHorizontal,
    height: 13,
    backgroundColor: color.whiteColor,
    marginTop: 16
  }
});

export default HeaderAudioSliderComponent;