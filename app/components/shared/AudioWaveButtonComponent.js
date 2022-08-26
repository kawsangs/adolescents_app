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
    if (!!props.playingId && props.playingId != props.itemId)
      setIsPlaying(false);
  }, [props.playingId]);

  // Called when toggle the play button
  const toggleIsPlaying = () => {
    setIsPlaying(!isPlaying);
    props.updatePlayingId(props.itemId)
  }

  // Called when the audio is finished playing
  const stopPlaying = () => {
    setIsPlaying(false);
    props.updatePlayingId(null);
  }

  return (
    <View style={[styles.center, props.containerStyle]}>
      <AudioWaveButtonRippleComponent size={size} isPlaying={isPlaying} />
      <PlayAudioComponent
        playIcon='play'
        pauseIcon='pause'
        iconSize={24}
        iconColor={color.primaryColor}
        audioFile={props.audioFile}
        btnStyle={styles.audioBtn}
        itemId={props.itemId}
        playingId={props.playingId}
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