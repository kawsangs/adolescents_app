import React from 'react';
import {View} from 'react-native';
import {Checkbox} from 'react-native-paper';

import SelectionItemAudioButtonComponent from '../SelectionItemAudioButtonComponent';
import color from '../../../themes/color';
import componentUtil from '../../../utils/component_util';
import {getStyleOfDevice} from '../../../utils/responsive_util';
import tabletStyles from '../../../assets/stylesheets/tablet/selectionItemComponentStyles';
import mobileStyles from '../../../assets/stylesheets/mobile/selectionItemComponentStyles';

const styles = getStyleOfDevice(tabletStyles, mobileStyles);

const CheckboxItemComponent = (props) => {
  const renderAudioBtn = () => {
    return <SelectionItemAudioButtonComponent
              audio={props.audio}
              itemUuid={props.uuid}
              playingUuid={props.playingUuid}
              updatePlayingUuid={props.updatePlayingUuid}
           />
  }

  return (
    <View style={{flexDirection: 'row'}}>
      <View style={{flex: 1}}>
        <Checkbox.Item label={props.label}
          status={props.isSelected ? 'checked' : 'unchecked'}
          style={styles.selectionItem}
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

export default CheckboxItemComponent;