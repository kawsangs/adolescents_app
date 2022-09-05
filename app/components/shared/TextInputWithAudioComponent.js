import React from 'react';
import {View, TextInput} from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';

import TextComponent from './TextComponent';
import PlayAudioComponent from './PlayAudioComponent';
import {cardBorderRadius} from '../../constants/component_constant';

const TextInputWithAudioComponent = (props) => {
  return (
    <View style={props.style}>
      <TextComponent label={props.label} style={{color: 'white'}} />

      <View style={{backgroundColor: 'white', height: 48, borderRadius: cardBorderRadius, marginTop: 10}}>
        <TextInput style={{borderWidth: 0, borderRadius: cardBorderRadius}}/>

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