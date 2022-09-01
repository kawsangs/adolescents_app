import React, { useEffect, useState } from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import color from '../../themes/color';
import componentUtil from '../../utils/component_util';
import { outlinedButtonBorderWidth } from '../../constants/component_constant';
import audioPlayerService from '../../services/audio_player_service';

const PlayAudioComponent = (props) => {
  const [state, setState] = useState({
    audioPlayer: null,
    playSeconds: 0,
    duration: 0,
    countInterval: null,
  });

  useEffect(() => {
    if (!!props.playingId && props.playingId != props.itemId) {
      setState({
        audioPlayer: null,
        playSeconds: 0,
        duration: 0,
        countInterval: null
      });
    }
  }, [props.playingId])

  const updateState = (audioPlayer, playSeconds, duration, countInterval) => {
    setState({ audioPlayer, playSeconds, duration, countInterval })
  }

  const toggleAudio = () => {
    if (!!state.audioPlayer) {
      audioPlayerService.playPause(state.audioPlayer, state.countInterval, (audioPlayer, playSeconds, duration, countInterval) => {
        global.audioPlayer = audioPlayer;
        global.countInterval = countInterval;
        updateState(audioPlayer, playSeconds, duration, countInterval);
        !!props.updatePlaySeconds && props.updatePlaySeconds(playSeconds);  // update the play seconds to its parent component
        handleStopPlaying(countInterval);
      });
      return;
    }

    // Clear all the playing audio when starting to play a new audio
    if (!!global.audioPlayer || !!global.countInterval)
      clearAudioPlayer()

    audioPlayerService.play(props.audio, props.itemId, props.playingId, (audioPlayer, playSeconds, duration, countInterval) => {
      global.audioPlayer = audioPlayer;
      global.countInterval = countInterval;
      updateState(audioPlayer, playSeconds, duration, countInterval);
      !!props.updatePlaySeconds && props.updatePlaySeconds(playSeconds);
      handleStopPlaying(countInterval);
    });
  }

  const handleStopPlaying = (countInterval) => {
    if (!countInterval)
      props.stopPlaying();
  }

  const clearAudioPlayer = () => {
    global.audioPlayer.release();
    clearInterval(global.countInterval)
    global.audioPlayer = null;
    global.countInterval = null;
  }

  const onPress = () => {
    props.toggleIsPlaying();
    toggleAudio();
  }

  return (
    <TouchableOpacity onPress={() => onPress()} style={[styles.btn, props.btnStyle]}
      disabled={!props.audio}
    >
      <Icon
        name={props.isPlaying ? props.pauseIcon : props.playIcon}
        size={props.iconSize} color={!!props.audio ? color.primaryColor : color.mutedColor}
        style={[props.iconStyle, { marginLeft: !props.isPlaying ? 0 : -2 }]}
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

export default PlayAudioComponent;

// How to use
{/* <PlayAudioComponent
  playIcon='play'
  pauseIcon='pause'
  iconSize={24}
  iconColor={color.primaryColor}
  audio={props.audio}
  btnStyle={styles.audioBtn}
  itemId={props.itemId}             // id of the item that render on the card
  playingId={props.playingId}       // id of the item that is playing the audio
  isPlaying={isPlaying}             // playing status of the audio
  toggleIsPlaying={() => toggleIsPlaying()}
  stopPlaying={() => stopPlaying()}
/> */}