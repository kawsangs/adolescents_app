import React from 'react';
import { StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';

import CardWithSoundWaveAudioComponent from './cardWithSoundWaves/CardWithSoundWaveAudioComponent';
import CardWithSoundWaveInfoComponent from './cardWithSoundWaves/CardWithSoundWaveInfoComponent';
import color from '../../themes/color';
import {cardElevation, cardBorderRadius} from '../../constants/component_constant';
import navigationService from '../../services/navigation_service';

const CardWithSoundWaveComponent = (props) => {
  return (
    <Card mode='elevated' elevation={cardElevation} style={styles.container}
      onPress={() => navigationService.navigateCategory(props.item.uuid)}
    >
      <CardWithSoundWaveAudioComponent
        itemUuid={props.item.uuid}
        audio={props.item.audioSource}
        playingUuid={props.playingUuid}
        updatePlayingUuid={props.updatePlayingUuid}
      />
      <CardWithSoundWaveInfoComponent title={props.item.name} description={props.item.description} />
    </Card>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.whiteColor,
    borderRadius: cardBorderRadius,
    flexDirection: 'column',
    marginTop: 38,
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 16,
  }
});

export default CardWithSoundWaveComponent;