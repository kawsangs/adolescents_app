import React from 'react';
import { Animated, View, StyleSheet } from 'react-native';

import AudioControlButton from './AudioControlButton';
import { screenHorizontalPadding } from '../../../constants/component_constant';
import { headerWithAudioScrollDistance } from '../../../constants/android_component_constant';
import { FAST_FORWARD, REVERSE } from '../../../constants/audio_constant';
import { getStyleOfDevice } from '../../../utils/responsive_util';
import audioPlayerService from '../../../services/audio_player_service';

const HeaderAudioControlButtonsComponent = (props) => {
  // Scale for making the audio controls smaller or bigger when scrolling
  const audioControlScale = props.scrollY.interpolate({
    inputRange: [0, headerWithAudioScrollDistance],
    outputRange: [1, 0.80],
    extrapolate: 'clamp',
  });

  const audioControlPositionY = props.scrollY.interpolate({
    inputRange: [0, headerWithAudioScrollDistance],
    outputRange: getStyleOfDevice([80, 15], [70, 20]),
    extrapolate: 'clamp'
  });

  const playAudio = () => {
    // Play/pause the audio if the audioPlayer is already initiated
    if (!!props.audioPlayer) {
      audioPlayerService.playPause(props.audioPlayer, props.countInterval, (audioPlayer, playSeconds, duration, countInterval) => {
        props.updateAudioPlayer(audioPlayer, playSeconds, duration, countInterval);
      });
      return;
    }

    audioPlayerService.play(props.audio, props.uuid, null, (audioPlayer, playSeconds, duration, countInterval) => {
      props.updateAudioPlayer(audioPlayer, playSeconds, duration, countInterval);
    });
  }

  const forwardBackwardSize = getStyleOfDevice(34, 32);

  return (
    <View style={{flex: 1, paddingHorizontal: screenHorizontalPadding}}>
      <Animated.View style={[styles.audioControl,
        !props.hideAnimation ? {transform: [{scaleX: audioControlScale}, {scaleY: audioControlScale}, {translateY: audioControlPositionY}]} : {}]}
      >
        <AudioControlButton iconName='play-back' size={forwardBackwardSize}
          onPress={() => audioPlayerService.fastForwardOrReverse(props.audioPlayer, REVERSE)}
        />
        <AudioControlButton iconName={!!props.countInterval ? 'pause' : 'play'} size={getStyleOfDevice(55, 50)} onPress={() => playAudio()} />
        <AudioControlButton iconName='play-forward' size={forwardBackwardSize}
          onPress={() => audioPlayerService.fastForwardOrReverse(props.audioPlayer, FAST_FORWARD)}
        />
      </Animated.View>
    </View>
  )
}

const styles = StyleSheet.create({
  audioControl: {
    flexDirection: 'row',
    justifyContent: 'center',
  }
});

export default HeaderAudioControlButtonsComponent;