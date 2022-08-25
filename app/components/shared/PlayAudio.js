import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import color from '../../themes/color';
import componentUtil from '../../utils/component_util';
import { outlinedButtonBorderWidth } from '../../constants/component_constant';
import audioPlayerService from '../../services/audio_player_service';

const PlayAudio = (props) => {
  const [state, setState] = useState({
    audioPlayer: null,
    playSeconds: 0,
    duration: 0,
    countInterval: null,
  });

  const updateState = (audioPlayer, playSeconds, duration, countInterval) => {
    setState({ audioPlayer, playSeconds, duration, countInterval })
  }

  const toggleAudio = () => {
    if (!!state.audioPlayer) {
      audioPlayerService.playPause(state.audioPlayer, state.countInterval, (audioPlayer, playSeconds, duration, countInterval) => {
        global.audioPlayer = audioPlayer;
        updateState(audioPlayer, playSeconds, duration, countInterval);
        handleAnimation(countInterval);
      });
      return;
    }

    audioPlayerService.play(props.audioFile, (audioPlayer, playSeconds, duration, countInterval) => {
      global.audioPlayer = audioPlayer;
      updateState(audioPlayer, playSeconds, duration, countInterval);
      handleAnimation(countInterval);
    });
  }

  const handleAnimation = (countInterval) => {
    if (!countInterval)
      props.stopAnimation();
  }

  const onPress = () => {
    props.toggleAnimation();
    toggleAudio();
  }

  return (
    <TouchableOpacity onPress={() => onPress()} style={[styles.btn, props.btnStyle]}>
      <Icon name={!state.countInterval ? props.playIcon : props.pauseIcon} size={props.size} color={props.color}
        style={[props.iconStyle, { marginLeft: !state.countInterval ? 0 : -2 }]}
      />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  btn: {
    width: componentUtil.pressableItemSize(),
    height: componentUtil.pressableItemSize(),
    borderWidth: outlinedButtonBorderWidth,
    borderColor: color.primaryColor,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default PlayAudio;

// How to use
// <PlayAudio btnStyle={styles} />