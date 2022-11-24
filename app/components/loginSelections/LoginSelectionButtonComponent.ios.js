import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';

import GradientViewComponent from '../shared/GradientViewComponent';
import BoldLabelComponent from '../shared/BoldLabelComponent';
import PlayAudioComponent from '../shared/PlayAudioComponent';
import AnonymousIconComponent from '../shared/AnonymousIconComponent';
import color from '../../themes/color';
import {BUTTON_DELAY_DURATION} from '../../constants/main_constant';
import {getStyleOfDevice} from '../../utils/responsive_util';
import sharedStyles from '../../assets/stylesheets/shared/sharedStyles';
import tabletStyles from '../../assets/stylesheets/tablet/loginSelectionButtonComponentStyles';
import mobileStyles from '../../assets/stylesheets/mobile/loginSelectionButtonComponentStyles';

const styles = getStyleOfDevice(tabletStyles, mobileStyles);

const LoginSelectionButtonComponent = (props) => {
  const [disabled, setDisabled] = useState(false);
  const renderAudioButton = () => {
    return (
      <PlayAudioComponent
        iconSize={24}
        audio={props.audio}
        btnStyle={styles.audioBtn}
        itemUuid={props.uuid}
        playingUuid={props.playingUuid}
        isSpeakerIcon={true}
        updatePlayingUuid={props.updatePlayingUuid}
      />
    )
  }

  const renderGradientIcon = () => {
    return <GradientViewComponent style={styles.leftIconContainer}>
              { props.isAnonymous ? 
                <AnonymousIconComponent size={26} color={color.whiteColor}/>
                : <FeatherIcon name={props.iconName} color={color.whiteColor} style={styles.leftIcon} />
              }
           </GradientViewComponent>
  }

  const onPress = () => {
    setDisabled(true);
    !!props.onPress && props.onPress();

    // Preventing the user from clicking the button mutiple times at once
    setTimeout(() => {
      setDisabled(false)
    }, BUTTON_DELAY_DURATION);
  }

  return (
    <TouchableOpacity onPress={() => onPress()} style={[styles.container, sharedStyles.boxShadow, props.btnStyle]}
      disabled={disabled}
    >
      { renderGradientIcon() }
      <BoldLabelComponent label={props.label} style={styles.label} />
      { renderAudioButton() }
    </TouchableOpacity>
  )
}

export default LoginSelectionButtonComponent;