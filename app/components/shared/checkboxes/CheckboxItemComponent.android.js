import React from 'react';
import {View} from 'react-native';
import {Checkbox} from 'react-native-paper';
import AudioPlayerButton from 'react-native-audio-player-button';

import color from '../../../themes/color';
import {getStyleOfDevice} from '../../../utils/responsive_util';
import tabletStyles from '../../../assets/stylesheets/tablet/selectionItemComponentStyles';
import mobileStyles from '../../../assets/stylesheets/mobile/selectionItemComponentStyles';

const styles = getStyleOfDevice(tabletStyles, mobileStyles);

const CheckboxItemComponent = (props) => {
  const renderAudioBtn = () => {
    return <AudioPlayerButton
              audio={props.audio}
              itemUuid={props.uuid}
              isSpeakerIcon={true}
              iconSize={24}
              playingUuid={props.playingUuid}
              updatePlayingUuid={props.updatePlayingUuid}
              buttonColor="transparent"
              buttonStyle={{borderRadius: 0}}
              iconPrimaryColor={color.primaryColor}
              iconSecondaryColor={color.secondaryColor}
              accessibilityLabel={props.accessibilityLabel}
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