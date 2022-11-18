import React from 'react';
import {View} from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';
import FeatherIcon from 'react-native-vector-icons/Feather';

import PlayAudioComponent from '../shared/PlayAudioComponent';
import color from '../../themes/color';
import componentUtil from '../../utils/component_util';
import {isShortScreenDevice} from '../../utils/responsive_util';

const FacilityCardAudioComponent = (props) => {
  return (
    <View>
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
      <FeatherIcon name="chevron-right" color={color.primaryColor} size={32} style={{alignSelf: 'center', marginTop: -6 }} />
    </View>
  )
}

export default FacilityCardAudioComponent;