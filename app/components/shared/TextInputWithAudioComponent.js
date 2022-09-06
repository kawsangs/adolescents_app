import React from 'react';
import {View, TextInput} from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';

import TextComponent from './TextComponent';
import PlayAudioComponent from './PlayAudioComponent';
import {cardBorderRadius} from '../../constants/component_constant';
import componentUtil from '../../utils/component_util';

const TextInputWithAudioComponent = (props) => {
  const pressableSize = componentUtil.mediumPressableItemSize();

  return (
    <View style={props.style}>
      <TextComponent label={props.label} required={true} style={{color: 'white'}} />

      <View style={{backgroundColor: 'white', height: pressableSize, borderRadius: cardBorderRadius, marginTop: 10}}>
        <TextInput style={{borderWidth: 0, borderRadius: cardBorderRadius, height: pressableSize, paddingLeft: 16, paddingRight: pressableSize}}
          value={props.value}
          onChangeText={(value) => props.updateValue(value)}
        />

        <PlayAudioComponent
          playIcon='volume-high-outline'
          pauseIcon='pause'
          muteIcon='volume-mute-outline'
          iconSize={24}
          audio={props.audio}
          btnStyle={{borderWidth: 0, position: 'absolute', right: 0, borderRadius: 0}}
          itemUuid={props.uuid}
          playingUuid={props.playingUuid}
          updatePlayingUuid={props.updatePlayingUuid}
        >
          <IonIcon/>
        </PlayAudioComponent>
      </View>
    </View>
  )
}

export default TextInputWithAudioComponent;