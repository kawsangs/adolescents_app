import React from 'react';
import { StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';

import CardWithSoundWaveAudioComponent from './cardWithSoundWaves/CardWithSoundWaveAudioComponent';
import CardWithSoundWaveInfoComponent from './cardWithSoundWaves/CardWithSoundWaveInfoComponent';
import color from '../../themes/color';
import {cardElevation, cardBorderRadius} from '../../constants/component_constant';

const CardWithSoundWaveComponent = (props) => {
  return (
    <Card mode='elevated' elevation={cardElevation} style={styles.container}>
      <CardWithSoundWaveAudioComponent
        itemUuid={props.item.uuid}
        audio={props.item.audio}
        playingUuid={props.playingUuid}
        updatePlayingUuid={props.updatePlayingUuid}
      />
      <CardWithSoundWaveInfoComponent title={props.item.title} description={props.item.description} />
    </Card>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.whiteColor,
    borderRadius: cardBorderRadius,
    flexDirection: 'column',
    marginTop: 30,
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 16,
  }
});

export default CardWithSoundWaveComponent;