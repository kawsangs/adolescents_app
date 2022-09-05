import React from 'react';
import {TouchableOpacity} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import IonIcon from 'react-native-vector-icons/Ionicons';

import GradientViewComponent from '../shared/GradientViewComponent';
import BoldLabelComponent from '../shared/BoldLabelComponent';
import PlayAudioComponent from '../shared/PlayAudioComponent';
import color from '../../themes/color';
import {getStyleOfDevice} from '../../utils/responsive_util';
import tabletStyles from '../../assets/stylesheets/tablet/loginSelectionButtonComponentStyles';
import mobileStyles from '../../assets/stylesheets/mobile/loginSelectionButtonComponentStyles';

const styles = getStyleOfDevice(tabletStyles, mobileStyles);

const LoginSelectionButtonComponent = (props) => {
  return (
    <TouchableOpacity
      onPress={() => !!props.onPress && props.onPress()}
      style={[styles.container, props.btnStyle]}
    >
      <GradientViewComponent style={styles.leftIconContainer}>
        <FeatherIcon name={props.iconName} color={color.whiteColor} style={styles.leftIcon} />
      </GradientViewComponent>

      <BoldLabelComponent label={props.label} style={styles.label} />

      <PlayAudioComponent
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
    </TouchableOpacity>
  )
}

export default LoginSelectionButtonComponent;