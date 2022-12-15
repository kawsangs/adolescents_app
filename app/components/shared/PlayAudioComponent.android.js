import React, { useEffect, useState, useRef } from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';

import PlayAudioIconComponent from './playAudios/PlayAudioIconComponent';
import color from '../../themes/color';
import componentUtil from '../../utils/component_util';
import { outlinedButtonBorderWidth } from '../../constants/component_constant';
import audioPlayerService from '../../services/audio_player_service';

const PlayAudioComponent = (props) => {
  // we use useRef intead of useState because useState is asynchronous that will not update the value immediately
  // and will cause the audio to play incorrectly when switching between different audios
  const localAudioPlayer = useRef(null);
  const [state, setState] = useState({
    playSeconds: 0,
    duration: 0,
    countInterval: null,
  });
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // Clear the local audio if the user is switching to play another audio
    if (!!props.playingUuid && props.playingUuid != props.itemUuid)
      clearLocalAudioPlayer();

    // Clear all the audio if the playingUuid is null (ex: exit the screen)
    if (!props.playingUuid && !!global.audioPlayer && !!localAudioPlayer.current) {
      clearLocalAudioPlayer();
      audioPlayerService.clearAllAudio();
    }
  }, [props.playingUuid])

  useEffect(() => {
    return () => { audioPlayerService.clearAllAudio(); }  // Clear all the audio when component is unmount
  }, []);

  const clearLocalAudioPlayer = () => {
    localAudioPlayer.current = null;
    setState({
      playSeconds: 0,
      duration: 0,
      countInterval: null
    });
    setIsPlaying(false);
    !!props.toggleIsPlaying && props.toggleIsPlaying(false); // toggledIsPlaying props is used for updating the ripple animation of its parent component
  }

  const updateState = (playSeconds, duration, countInterval) => {
    setState({ playSeconds, duration, countInterval })
  }

  const toggleAudio = () => {
    if (!!localAudioPlayer.current) {
      audioPlayerService.playPause(localAudioPlayer.current, state.countInterval, (audioPlayer, playSeconds, duration, countInterval) => {
        global.audioPlayer = audioPlayer;
        global.countInterval = countInterval;
        localAudioPlayer.current = audioPlayer;
        updateState(playSeconds, duration, countInterval);
        !!props.updatePlaySeconds && props.updatePlaySeconds(playSeconds);  // update the play seconds to its parent component
        handleStopPlaying(countInterval, playSeconds, duration);
      });
      return;
    }

    audioPlayerService.clearAllAudio(); // Clear all the playing audio when starting to play a new audio if there is an existing audio is playing

    audioPlayerService.play(props.audio, props.itemUuid, props.playingUuid, (audioPlayer, playSeconds, duration, countInterval) => {
      global.audioPlayer = audioPlayer;
      global.countInterval = countInterval;
      localAudioPlayer.current = audioPlayer;
      updateState(playSeconds, duration, countInterval);
      !!props.updatePlaySeconds && props.updatePlaySeconds(playSeconds);
      handleStopPlaying(countInterval, playSeconds, duration);
    });
  }

  const handleStopPlaying = (countInterval, playSeconds, duration) => {
    if (!countInterval) {
      setIsPlaying(false);
      !!props.toggleIsPlaying && props.toggleIsPlaying(false);

      if (playSeconds == 0 && duration == 0)
        props.updatePlayingUuid(null);
    }
  }

  const onPress = () => {
    props.updatePlayingUuid(props.itemUuid);
    !!props.toggleIsPlaying && props.toggleIsPlaying(!isPlaying);
    setIsPlaying(!isPlaying);
    toggleAudio();
  }

  return (
    <TouchableOpacity onPress={() => onPress()} style={[styles.btn, props.btnStyle]} disabled={!props.audio} accessibilityLabel={`ចាក់សម្លេងរបស់${props.accessibilityLabel}`}>
      <PlayAudioIconComponent isPlaying={isPlaying} audio={props.audio} isSpeakerIcon={props.isSpeakerIcon}
        iconStyle={props.iconStyle} iconSize={props.iconSize} iconColor={props.iconColor}
      />
      {/* <Text>{props.accessibilityLabel}</Text> */}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  btn: {
    width: componentUtil.mediumPressableItemSize(),
    height: componentUtil.mediumPressableItemSize(),
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
  iconSize={24}
  audio={props.audio}
  isSpeakerIcon={true/false}
  btnStyle={styles.audioBtn}
  itemUuid={props.itemUuid}             // uuid of the item that render on the card
  playingUuid={props.playingUuid}       // uuid of the item that is playing the audio
  updatePlayingUuid={() => updatePlayingUuid(uuid)}
  toggleIsPlaying={(status) => toggleIsPlaying(status)}     // optional
> 
  {icon component}
</PlayAudioComponent>
*/}