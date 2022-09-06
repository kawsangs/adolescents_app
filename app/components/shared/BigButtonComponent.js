import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';

import BoldLabelComponent from './BoldLabelComponent';
import PlayAudioComponent from './PlayAudioComponent';
import color from '../../themes/color';
import componentUtil from '../../utils/component_util';
import {bigFontSize} from '../../utils/font_size_util';

const BigButtonComponent = (props) => {
  return (
    <TouchableOpacity onPress={() => props.onPress()} style={[styles.btn, props.style]}>
      <BoldLabelComponent label={props.label} style={styles.label} />

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
    height: componentUtil.mediumPressableItemSize(),
    justifyContent: 'center'
  },
  label: {
    color: color.whiteColor,
    fontSize: bigFontSize()
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