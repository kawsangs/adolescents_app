import React, {useState} from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import AudioPlayerButton from 'react-native-audio-player-button';

import BoldLabelComponent from './BoldLabelComponent';
import color from '../../themes/color';
import {BUTTON_DELAY_DURATION} from '../../constants/main_constant';
import componentUtil from '../../utils/component_util';
import {xLargeFontSize} from '../../utils/font_size_util';
import {getStyleOfDevice} from '../../utils/responsive_util';

const BigButtonComponent = (props) => {
  const [disabled, setDisabled] = useState(false);
  const colorSet = () => {
    if (props.disabled)
      return { bgColor: color.disabledColor, textColor: color.mutedColor };

    return { bgColor: color.bigButtonColor, textColor: color.primaryColor };
  }

  const renderAudioBtn = () => {
    return <AudioPlayerButton
              audio={props.audio}
              itemUuid={props.uuid}
              isSpeakerIcon={true}
              iconSize={24}
              iconPrimaryColor={color.primaryColor}
              iconSecondaryColor={color.secondaryColor}
              buttonColor="transparent"
              containerStyle={{position: 'absolute', right: 0}}
              buttonStyle={styles.audioBtn}
              playingUuid={props.playingUuid}
              updatePlayingUuid={props.updatePlayingUuid}
              accessibilityLabel={props.accessibilityLabel}
           />
  }

  const onPress = () => {
    setDisabled(true);
    !!props.onPress && props.onPress();
    setTimeout(() => setDisabled(false), BUTTON_DELAY_DURATION);
  }

  return (
    <TouchableOpacity onPress={() => onPress()} style={[styles.btn, props.style, { backgroundColor: colorSet().bgColor }]}
      disabled={props.disabled || disabled}
    >
      <BoldLabelComponent label={props.label} style={{ fontSize: xLargeFontSize(), color: colorSet().textColor, marginTop: getStyleOfDevice(6, 2) }} />
      {renderAudioBtn()}
    </TouchableOpacity>
  )
}

const BORDER_RADIUS = 40;
const styles = StyleSheet.create({
  btn: {
    alignItems: 'center',
    backgroundColor: color.primaryColor,
    borderRadius: BORDER_RADIUS,
    elevation: 4,
    height: getStyleOfDevice(componentUtil.tabletPressableItemSize(), componentUtil.mediumPressableItemSize()),
    justifyContent: 'center'
  },
  audioBtn: {
    borderRadius: 0,
    borderTopRightRadius: BORDER_RADIUS,
    borderBottomRightRadius: BORDER_RADIUS,
  }
});

export default BigButtonComponent;