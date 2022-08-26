import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Sound from 'react-native-sound';

import AudioWaveButtonComponent from '../AudioWaveButtonComponent';
import {smallFontSize} from '../../../utils/font_size_util';
import componentUtil from '../../../utils/component_util';
import audioUtil from '../../../utils/audio_util';

const CardWithSoundWaveAudioComponent = (props) => {
  const [duration, setDuration] = useState(0);      // duration is in second
  useEffect(() => {
    const audioPlayer = new Sound(props.audioFile, (error) => {
      if (!!error)
        return console.log('failed to play audio = ', error);

      setDuration(audioPlayer.getDuration());
      audioPlayer.release();
    })
  }, [])

  return (
    <View>
      <AudioWaveButtonComponent
        itemId={props.itemId}
        audioFile={props.audioFile}
        playingId={props.playingId}
        containerStyle={styles.btn}
        updatePlayingId={props.updatePlayingId}
      />
      <Text style={styles.label}>{ audioUtil.getFormattedPlaySeconds(duration) }</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  btn: {
    borderWidth: 0,
    height: componentUtil.pressableItemSize(),
    width: componentUtil.pressableItemSize(),
    position: 'absolute',
    top: -20,
    zIndex: 10
  },
  label: {
    fontSize: smallFontSize(),
    textAlign: 'right',
  }
});

export default CardWithSoundWaveAudioComponent;