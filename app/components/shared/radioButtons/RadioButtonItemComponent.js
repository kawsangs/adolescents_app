import React from 'react';
import {View} from 'react-native';
import {RadioButton} from 'react-native-paper';
import IonIcon from 'react-native-vector-icons/Ionicons';

import TextComponent from '../TextComponent';
import PlayAudioComponent from '../PlayAudioComponent';
import componentUtil from '../../../utils/component_util';

const RadioButtonItemComponent = (props) => {
  return (
    <View style={{flexDirection: 'row', alignItems: 'center', height: componentUtil.mediumPressableItemSize()}}>
      <RadioButton value="first" label="item" />
      <TextComponent label={props.label} style={{color: "black"}} />

      <PlayAudioComponent
        playIcon='volume-high-outline'
        pauseIcon='pause'
        muteIcon='volume-mute-outline'
        iconSize={24}
        audio={props.audio}
        btnStyle={{borderWidth: 0, position: 'absolute', right: 0, borderRadius: 0, height: componentUtil.mediumPressableItemSize(), width: componentUtil.mediumPressableItemSize()}}
        itemUuid={props.uuid}
        playingUuid={props.playingUuid}
        updatePlayingUuid={props.updatePlayingUuid}
      >
        <IonIcon/>
      </PlayAudioComponent>
    </View>
  )
}

export default RadioButtonItemComponent;