import React from 'react';
import {View} from 'react-native';
import {RadioButton} from 'react-native-paper';

import SelectionItemAudioButtonComponent from '../SelectionItemAudioButtonComponent';
import componentUtil from '../../../utils/component_util';
import color from '../../../themes/color';

import {getStyleOfDevice} from '../../../utils/responsive_util';
import tabletStyles from '../../../assets/stylesheets/tablet/selectionItemComponentStyles';
import mobileStyles from '../../../assets/stylesheets/mobile/selectionItemComponentStyles';

const styles = getStyleOfDevice(tabletStyles, mobileStyles);

const RadioButtonItemComponent = (props) => {
  const renderRadioBtn = () => {
    return <View style={{flex: 1}}>
              <RadioButton.Item
                status={props.selectedValue == props.value ? 'checked' : 'unchecked'}
                value={props.value}
                color={color.secondaryColor} uncheckedColor={color.primaryColor}
                position='leading'
                label={props.label}
                labelStyle={styles.label}
                onValueChange={() => props.updateValue(props.value)}
                style={styles.selectionItem}
              />
           </View>
  }

  const renderAudioBtn = () => {
    return <SelectionItemAudioButtonComponent
              audio={props.audio}
              itemUuid={props.uuid}
              playingUuid={props.playingUuid}
              updatePlayingUuid={props.updatePlayingUuid}
           />
  }

  return (
    <View style={{flexDirection: 'row', height: componentUtil.mediumPressableItemSize(), paddingLeft: 0}}>
      { renderRadioBtn() }
      { renderAudioBtn() }
    </View>
  )
}

export default RadioButtonItemComponent;