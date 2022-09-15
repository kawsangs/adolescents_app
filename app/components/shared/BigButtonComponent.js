import React, {useState} from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';

import BoldLabelComponent from './BoldLabelComponent';
import PlayAudioComponent from './PlayAudioComponent';
import color from '../../themes/color';
import {BUTTON_DELAY_DURATION} from '../../constants/main_constant';
import componentUtil from '../../utils/component_util';
import {xLargeFontSize} from '../../utils/font_size_util';

const BigButtonComponent = (props) => {
  const [disabled, setDisabled] = useState(false);
  const colorSet = () => {
    if (props.disabled)
      return { bgColor: color.disabledColor, textColor: color.mutedColor };

    return { bgColor: color.primaryColor, textColor: color.whiteColor };
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
      <BoldLabelComponent label={props.label} style={{ fontSize: xLargeFontSize(), color: colorSet().textColor }} />

      <PlayAudioComponent
        playIcon='volume-high-outline'
        pauseIcon='pause'
        muteIcon='volume-mute-outline'
        iconSize={24}
        audio={props.audio}
        btnStyle={styles.audioBtn}
        iconColor={color.whiteColor}
        itemUuid={props.uuid}
        playingUuid={props.playingUuid}
        updatePlayingUuid={props.updatePlayingUuid}
      >
        <IonIcon/>
      </PlayAudioComponent>
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
    height: componentUtil.mediumPressableItemSize(),
    justifyContent: 'center'
  },
  audioBtn: {
    borderRadius: 0,
    borderColor: 'white',
    borderTopRightRadius: BORDER_RADIUS,
    borderBottomRightRadius: BORDER_RADIUS,
    borderWidth: 0,
    position: 'absolute',
    right: 0,
  }
});

export default BigButtonComponent;