import React from 'react';
import { Animated, View, StyleSheet } from 'react-native';

import AudioControlButton from './AudioControlButton';
import { headerWithAudioScrollDistance, screenPaddingHorizontal } from '../../constants/component_constant';
import { getStyleOfDevice } from '../../utils/responsive_util';
import audioPlayerService from '../../services/audio_player_service';
import audioFile from '../../assets/audios/safety_plan.mp3';

const HeaderAudioControlButtonsComponent = (props) => {
  // Scale for making the audio controls smaller or bigger when scrolling
  const audioControlScale = props.scrollY.interpolate({
    inputRange: [0, headerWithAudioScrollDistance],
    outputRange: [1, 0.7],
    extrapolate: 'clamp',
  });

  const audioControlPositionY = props.scrollY.interpolate({
    inputRange: [0, headerWithAudioScrollDistance],
    outputRange: getStyleOfDevice([40, 15], [30, 10]),
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

    audioPlayerService.play(audioFile, (audioPlayer, playSeconds, duration, countInterval) => {
      props.updateAudioPlayer(audioPlayer, playSeconds, duration, countInterval);
    });
  }

  const stopAudio = () => {
    audioPlayerService.stop(props.audioPlayer, props.countInterval);
  }

  return (
    <View style={{flex: 1, paddingHorizontal: screenPaddingHorizontal}}>
      <Animated.View style={[styles.audioControl,
        {transform: [{scaleX: audioControlScale}, {scaleY: audioControlScale}, {translateY: audioControlPositionY}]}]}
      >
        <AudioControlButton iconName='step-backward' size={28} onPress={null} />
        <AudioControlButton iconName={!!props.countInterval ? 'pause-circle' : 'play-circle'} size={65} onPress={() => playAudio()} />
        <AudioControlButton iconName='step-forward' size={28} onPress={() => stopAudio()} />
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