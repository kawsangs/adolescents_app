import React from 'react';
import {View, TextInput} from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';

import TextComponent from './TextComponent';
import PlayAudioComponent from './PlayAudioComponent';
import color from '../../themes/color';
import {getStyleOfDevice} from '../../utils/responsive_util';
import tableStyles from '../../assets/stylesheets/tablet/textInputWithAudioComponentStyles';
import mobileStyles from '../../assets/stylesheets/mobile/textInputWithAudioComponentStyles';

const styles = getStyleOfDevice(tableStyles, mobileStyles);

const TextInputWithAudioComponent = (props) => {
  const renderTitle = () => {
    return <View style={{flexDirection: 'row'}}>
            <TextComponent label={props.label} required={props.required} style={styles.title} />
            { props.requiredVisible && <TextComponent label={props.requiredMsg} style={[styles.title, {color: color.requiredColor, marginLeft: 6}]} /> }
          </View>
  }

  const renderTextInput = () => {
    return <TextInput style={styles.input}
            keyboardType={props.keyboardType}
            value={props.value}
            onChangeText={(value) => props.updateValue(value)}
            onBlur={() => !!props.onBlur && props.onBlur()}
            onFocus={() => !!props.onFocus && props.onFocus()}
            maxLength={props.maxLength || null}
          />
  }

  const renderAudioBtn = () => {
    return <PlayAudioComponent
              iconSize={24}
              audio={props.audio}
              btnStyle={{borderWidth: 0, position: 'absolute', right: 0, borderRadius: 0}}
              itemUuid={props.uuid}
              playingUuid={props.playingUuid}
              isSpeakerIcon={true}
              updatePlayingUuid={props.updatePlayingUuid}
            >
              <IonIcon/>
            </PlayAudioComponent>
  }

  return (
    <View style={props.style}>
      { renderTitle() }
      <View style={styles.inputContainer}>
        { renderTextInput() }
        { renderAudioBtn() }
      </View>
    </View>
  )
}

export default TextInputWithAudioComponent;