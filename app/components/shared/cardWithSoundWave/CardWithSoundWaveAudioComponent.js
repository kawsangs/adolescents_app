import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import AudioWaveButtonComponent from '../AudioWaveButtonComponent';
import {smallFontSize} from '../../../utils/font_size_util';
import componentUtil from '../../../utils/component_util';
import audioUtil from '../../../utils/audio_util';

const CardWithSoundWaveAudioComponent = (props) => {
  return (
    <View>
      <AudioWaveButtonComponent audioFile={props.audioFile} containerStyle={styles.btn} />
      <Text style={styles.label}>{ audioUtil.getFormattedPlaySeconds(props.duration) }</Text>
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