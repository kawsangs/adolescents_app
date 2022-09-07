import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {RadioButton} from 'react-native-paper';
import IonIcon from 'react-native-vector-icons/Ionicons';

import TextComponent from '../TextComponent';
import PlayAudioComponent from '../PlayAudioComponent';
import componentUtil from '../../../utils/component_util';
import color from '../../../themes/color';

const RadioButtonItemComponent = (props) => {
  const renderRadioBtn = () => {
    return <TouchableOpacity style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}
              onPress={() => props.updateValue(props.value)}
            >
              <RadioButton.Item
                status={props.selectedValue == props.value ? 'checked' : 'unchecked'}
                value={props.value}
                color={color.secondaryColor} uncheckedColor={color.primaryColor}
              />
              <TextComponent label={props.label} style={{color: "black"}} />
            </TouchableOpacity>
  }

  const renderAudioBtn = () => {
    return <PlayAudioComponent
              playIcon='volume-high-outline'
              pauseIcon='pause'
              muteIcon='volume-mute-outline'
              iconSize={24}
              audio={props.audio}
              btnStyle={{borderWidth: 0, borderRadius: 0, height: componentUtil.mediumPressableItemSize(), width: componentUtil.mediumPressableItemSize()}}
              itemUuid={props.uuid}
              playingUuid={props.playingUuid}
              updatePlayingUuid={props.updatePlayingUuid}
            >
              <IonIcon/>
            </PlayAudioComponent>
  }

  return (
    <View style={{flexDirection: 'row', height: componentUtil.mediumPressableItemSize(), paddingLeft: 0}}>
      { renderRadioBtn() }
      { renderAudioBtn() }
    </View>
  )
}

export default RadioButtonItemComponent;