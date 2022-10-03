import React from 'react';
import {View, StyleSheet} from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';

import BoldLabelComponent from '../shared/BoldLabelComponent';
import PlayAudioComponent from '../shared/PlayAudioComponent';
import { cardTitleFontSize } from '../../constants/component_constant';
import componentUtil from '../../utils/component_util';
import {isShortScreenDevice} from '../../utils/responsive_util';

const FacilityCardTitleComponent = (props) => {
  return (
    <View style={{flexDirection: 'row', marginTop: 4}}>
      <BoldLabelComponent label={props.label} numberOfLines={2} style={styles.title} />

      <PlayAudioComponent
        playIcon='volume-high-outline'
        pauseIcon='pause'
        muteIcon='volume-mute-outline'
        isSpeakerIcon={true}
        iconSize={24}
        audio={props.audio}
        btnStyle={[{ borderWidth: 0 }, isShortScreenDevice() && {width: componentUtil.pressableItemSize(), height: componentUtil.pressableItemSize()}]}
        itemUuid={props.uuid}
        playingUuid={props.playingUuid}
        updatePlayingUuid={props.updatePlayingUuid}
      >
        <IonIcon/>
      </PlayAudioComponent>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: cardTitleFontSize,
    flex: 1,
    paddingLeft: 8,
    textAlignVertical: 'center'
  },
});

export default FacilityCardTitleComponent;