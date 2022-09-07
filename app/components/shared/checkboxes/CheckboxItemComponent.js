import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Checkbox} from 'react-native-paper';
import IonIcon from 'react-native-vector-icons/Ionicons';

import PlayAudioComponent from '../PlayAudioComponent';
import color from '../../../themes/color';
import {normalFontSize} from '../../../utils/font_size_util';
import componentUtil from '../../../utils/component_util';

const CheckboxItemComponent = (props) => {
  const renderAudioBtn = () => {
    return <PlayAudioComponent
              playIcon='volume-high-outline'
              pauseIcon='pause'
              muteIcon='volume-mute-outline'
              iconSize={24}
              audio={props.audio}
              btnStyle={styles.audioBtn}
              itemUuid={props.uuid}
              playingUuid={props.playingUuid}
              updatePlayingUuid={props.updatePlayingUuid}
            >
              <IonIcon/>
            </PlayAudioComponent>
  }

  return (
    <View style={{flexDirection: 'row'}}>
      <View style={{flex: 1}}>
        <Checkbox.Item label={props.label}
          status={props.isSelected ? 'checked' : 'unchecked'}
          style={{height: componentUtil.mediumPressableItemSize()}}
          uncheckedColor={color.primaryColor}
          color={color.secondaryColor}
          labelStyle={styles.label}
          position='leading'
          onPress={() => props.onPress(props.value)}
        />
      </View>

      {renderAudioBtn()}
    </View>
  )
}

const styles = StyleSheet.create({
  label: {
    fontSize: normalFontSize(),
    letterSpacing: -1,
    paddingLeft: 16,
    textAlign: 'left',
  },
  audioBtn: {
    borderWidth: 0,
    borderRadius: 0,
    height: componentUtil.mediumPressableItemSize(),
    width: componentUtil.mediumPressableItemSize()
  }
});

export default CheckboxItemComponent;