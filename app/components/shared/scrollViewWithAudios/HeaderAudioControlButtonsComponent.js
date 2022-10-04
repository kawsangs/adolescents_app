import React from 'react';
import { Animated, View, StyleSheet } from 'react-native';

import AudioControlButton from './AudioControlButton';
import { headerWithAudioScrollDistance, screenHorizontalPadding } from '../../../constants/component_constant';
import { FAST_FORWARD, REVERSE } from '../../../constants/audio_constant';
import { getStyleOfDevice } from '../../../utils/responsive_util';
import audioPlayerService from '../../../services/audio_player_service';
import audioFile from '../../../assets/audios/safety_plan.mp3';

const HeaderAudioControlButtonsComponent = (props) => {
  // Scale for making the audio controls smaller or bigger when scrolling
  const audioControlScale = props.scrollY.interpolate({
    inputRange: [0, headerWithAudioScrollDistance],
    outputRange: [1, 0.75],
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

    // The item id = 1 and playing id = null is for static displa only
    audioPlayerService.play(props.audio, 1, null, (audioPlayer, playSeconds, duration, countInterval) => {
      props.updateAudioPlayer(audioPlayer, playSeconds, duration, countInterval);
    });
  }

  const forwardBackwardSize = getStyleOfDevice(34, 32);

  return (
    <View style={{flex: 1, paddingHorizontal: screenHorizontalPadding}}>
      <Animated.View style={[styles.audioControl,
        {transform: [{scaleX: audioControlScale}, {scaleY: audioControlScale}, {translateY: audioControlPositionY}]}]}
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