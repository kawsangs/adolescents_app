import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';

import TextComponent from './TextComponent';
import PlayAudioComponent from './PlayAudioComponent';
import color from '../../themes/color';
import sharedStyles from '../../assets/stylesheets/shared/sharedStyles';
import {cardBorderRadius} from '../../constants/component_constant';
import componentUtil from '../../utils/component_util';

const TextInputWithAudioComponent = (props) => {
  const renderTitle = () => {
    return <View style={{flexDirection: 'row'}}>
            <TextComponent label={props.label} required={props.required} style={{color: color.whiteColor}} />
            { props.requiredVisible && <TextComponent label={props.requiredMsg} style={{color: color.requiredColor, marginLeft: 6}} /> }
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
  }

  return (
    <View style={props.style}>
      { renderTitle() }

      <View style={[styles.inputContainer, props.requiredVisible ? sharedStyles.requiredBorder : {}]}>
        { renderTextInput() }
        { renderAudioBtn() }
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: 'white',
    borderRadius: cardBorderRadius,
    height: componentUtil.mediumPressableItemSize(),
    marginTop: 10,
  },
  input: {
    borderWidth: 0,
    borderRadius: cardBorderRadius,
    height: componentUtil.mediumPressableItemSize(),
    paddingLeft: 16,
    paddingRight: componentUtil.mediumPressableItemSize()
  }
});

export default TextInputWithAudioComponent;