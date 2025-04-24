import React from 'react';
import {View} from 'react-native';
import {Checkbox} from 'react-native-paper';
import { useSelector } from 'react-redux';

import CustomAudioPlayerButtonComponent from '../CustomAudioPlayerButtonComponent';
import color from '../../../themes/color';
import {getStyleOfDevice} from '../../../utils/responsive_util';
import tabletStyles from '../../../assets/stylesheets/tablet/selectionItemComponentStyles';
import mobileStyles from '../../../assets/stylesheets/mobile/selectionItemComponentStyles';

const styles = getStyleOfDevice(tabletStyles, mobileStyles);

const CheckboxItemComponent = (props) => {
  const appTheme = useSelector(state => state.appTheme.value);
  const renderAudioBtn = () => {
    return <CustomAudioPlayerButtonComponent
              audio={props.audio}
              itemUuid={props.uuid}
              playingUuid={props.playingUuid}
              updatePlayingUuid={props.updatePlayingUuid}
              buttonColor="transparent"
              buttonStyle={{borderRadius: 0}}
              accessibilityLabel={props.accessibilityLabel}
           />
  }

  return (
    <View style={{flexDirection: 'row'}}>
      <View style={{flex: 1}}>
        <Checkbox.Item label={props.label}
          status={props.isSelected ? 'checked' : 'unchecked'}
          style={styles.selectionItem}
          uncheckedColor={appTheme.primary_color ?? color.primaryColor}
          color={appTheme.secondary_color ?? color.secondaryColor}
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