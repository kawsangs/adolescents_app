import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';

import CardWithSoundWaveAudioComponent from './CardWithSoundWaveAudioComponent';
import CardWithSoundWaveInfoComponent from './CardWithSoundWaveInfoComponent';
import color from '../../../themes/color';
import {cardElevation} from '../../../constants/component_constant';

const CardWithSoundWaveComponent = (props) => {
  return (
    <Card mode='elevated' elevation={cardElevation} style={styles.container}>
      <CardWithSoundWaveAudioComponent/>
      <CardWithSoundWaveInfoComponent/>
    </Card>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.whiteColor,
    flexDirection: 'column',
    height: 118,
    marginHorizontal: 16,
    marginTop: 30,
    paddingHorizontal: 16,
    paddingVertical: 6,
    width: '95%',
  }
});

export default CardWithSoundWaveComponent;