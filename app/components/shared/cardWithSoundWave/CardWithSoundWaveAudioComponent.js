import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';

import AudioWaveButtonComponent from '../audioWaveButton/AudioWaveButtonComponent';
import CardWithSoundWaveInfoComponent from './CardWithSoundWaveInfoComponent';
import color from '../../../themes/color';
import {cardElevation} from '../../../constants/component_constant';
import {normalFontSize, smallFontSize} from '../../../utils/font_size_util';

const CardWithSoundWaveAudioComponent = (props) => {
  return (
    <React.Fragment>
      <AudioWaveButtonComponent containerStyle={{ borderWidth: 0, width: 48, position: 'absolute', top: -28, zIndex: 10 }} />

      <Text style={{textAlign: 'right', fontSize: smallFontSize()}}>02:30</Text>
    </React.Fragment>
  )
}

export default CardWithSoundWaveAudioComponent;