import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';

import AudioWaveButtonRippleComponent from './audioWaveButtons/AudioWaveButtonRippleComponent';
import PlayAudioComponent from './PlayAudioComponent';
import color from '../../themes/color';
import componentUtil from '../../utils/component_util';

const size = componentUtil.pressableItemSize();

const AudioWaveButtonComponent = (props) => {
  const [isPlaying, setIsPlaying] = useState(false);
  useEffect(() => {
    if (!!props.playingUuid && props.playingUuid != props.itemUuid)
      setIsPlaying(false);
  }, [props.playingUuid]);

  // Called when toggle the play button
  const toggleIsPlaying = () => {
    setIsPlaying(!isPlaying);
    props.updatePlayingUuid(props.itemUuid)
  }

  // Called when the audio is finished playing
  const stopPlaying = () => {
    setIsPlaying(false);
    props.updatePlayingUuid(null);
  }

  return (
    <View style={[styles.center, props.containerStyle]}>
      <AudioWaveButtonRippleComponent size={size} isPlaying={isPlaying} />
      <PlayAudioComponent
        playIcon='play'
        pauseIcon='pause'
        iconSize={24}
        audio={props.audio}
        btnStyle={styles.audioBtn}
        itemUuid={props.itemUuid}
        playingUuid={props.playingUuid}
        isPlaying={isPlaying}
        toggleIsPlaying={() => toggleIsPlaying()}
        stopPlaying={() => stopPlaying()}
        updatePlaySeconds={props.updatePlaySeconds}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  audioBtn: {
    backgroundColor: color.whiteColor,
    borderColor: color.whiteColor,
    borderWidth: 0,
    elevation: 5,
    zIndex: 10,
  }
});

export default AudioWaveButtonComponent;