import React, { useState } from 'react';
import { Animated, View, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { headerWithAudioScrollDistance } from '../../constants/component_constant';
import componentUtil from '../../utils/component_util';
import { getStyleOfDevice } from '../../utils/responsive_util';
import audioPlayerService from '../../services/audio_player_service';

import audioFile from '../../assets/audios/safety_plan.mp3';

const forwardBackwardIconSize = 28;
const playPauseIconSize = 65;

const HeaderAudioControlButtonsComponent = (props) => {
  const [state, setState] = useState({
    audioPlayer: null,
    interval: null,
    playSeconds: 0
  });

  const audioButton = (iconName, size, onPress) => {
    return <TouchableOpacity onPress={() => onPress()} style={styles.button}>
              <Icon name={iconName} size={size} color='black' />
           </TouchableOpacity>
  }

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
    audioPlayerService.togglePlay(audioFile, setState.audioPlayer, setState.interval, (sound, seconds, countInterval) => {
      setAudioPlayer(prevValues => ({
        ...prevValues,
        audioPlayer: sound,
        playSeconds: seconds,
        interval: countInterval
      }))
    });
  }

  const stopAudio = () => {
    audioPlayerService.stop(setState.audioPlayer, setState.interval);
  }

  return (
    <View style={{flex: 1}}>
      <Animated.View style={[styles.audioControl,
        {transform: [{scaleX: audioControlScale}, {scaleY: audioControlScale}, {translateY: audioControlPositionY}]}]}
      >
        { audioButton('step-backward', forwardBackwardIconSize, null) }
        { audioButton(!!setState.interval ? 'pause-circle' : 'play-circle', playPauseIconSize, playAudio) }
        { audioButton('step-forward', forwardBackwardIconSize, stopAudio) }
      </Animated.View>
    </View>
  )
}

const styles = StyleSheet.create({
  audioControl: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    minWidth: componentUtil.pressableItemSize(),
    minHeight: componentUtil.pressableItemSize(),
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: componentUtil.pressableItemSize() - getStyleOfDevice(15, 20),
  }
});

export default HeaderAudioControlButtonsComponent;