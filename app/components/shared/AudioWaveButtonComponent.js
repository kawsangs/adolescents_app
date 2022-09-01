import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';

import AudioWaveButtonRippleComponent from './audioWaveButtons/AudioWaveButtonRippleComponent';
import PlayAudioComponent from './PlayAudioComponent';
import color from '../../themes/color';
import componentUtil from '../../utils/component_util';

const size = componentUtil.pressableItemSize();

const AudioWaveButtonComponent = (props) => {
  const [isPlaying, setIsPlaying] = useState(false);
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
        toggleIsPlaying={(isPlaying) => setIsPlaying(isPlaying)}
        updatePlaySeconds={props.updatePlaySeconds}
        updatePlayingUuid={props.updatePlayingUuid}
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