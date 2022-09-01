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
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (!!props.playingUuid && props.playingUuid != props.itemUuid) {
      setState({
        audioPlayer: null,
        playSeconds: 0,
        duration: 0,
        countInterval: null
      });
      setIsPlaying(false);
      !!props.toggleIsPlaying && props.toggleIsPlaying(false);  // toggledIsPlaying props is used for updating the ripple animation of its parent component
    }
  }, [props.playingUuid])

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

    audioPlayerService.play(props.audio, props.itemUuid, props.playingUuid, (audioPlayer, playSeconds, duration, countInterval) => {
      global.audioPlayer = audioPlayer;
      global.countInterval = countInterval;
      updateState(audioPlayer, playSeconds, duration, countInterval);
      !!props.updatePlaySeconds && props.updatePlaySeconds(playSeconds);
      handleStopPlaying(countInterval);
    });
  }

  const handleStopPlaying = (countInterval) => {
    if (!countInterval) {
      setIsPlaying(false);
      props.updatePlayingUuid(null);
      !!props.toggleIsPlaying && props.toggleIsPlaying(false);
    }
  }

  const clearAudioPlayer = () => {
    global.audioPlayer.release();
    clearInterval(global.countInterval)
    global.audioPlayer = null;
    global.countInterval = null;
  }

  const onPress = () => {
    props.updatePlayingUuid(props.itemUuid);
    !!props.toggleIsPlaying && props.toggleIsPlaying(!isPlaying);
    setIsPlaying(!isPlaying);
    toggleAudio();
  }

  return (
    <TouchableOpacity onPress={() => onPress()} style={[styles.btn, props.btnStyle]} disabled={!props.audio}>
      <Icon
        name={isPlaying ? props.pauseIcon : props.playIcon}
        size={props.iconSize} color={!!props.audio ? color.primaryColor : color.mutedColor}
        style={[props.iconStyle, { marginLeft: !isPlaying ? 0 : -2 }]}
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
  audio={props.audio}
  btnStyle={styles.audioBtn}
  itemUuid={props.itemUuid}             // uuid of the item that render on the card
  playingUuid={props.playingUuid}       // uuid of the item that is playing the audio
  updatePlayingUuid={() => updatePlayingUuid(uuid)}
  toggleIsPlaying={(status) => toggleIsPlaying(status)}     // optional
/> */}