import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';

import GradientViewComponent from '../shared/GradientViewComponent';
import BoldLabelComponent from '../shared/BoldLabelComponent';
import AnonymousIconComponent from '../shared/AnonymousIconComponent';
import CustomAudioPlayerButtonComponent from '../shared/CustomAudioPlayerButtonComponent';
import color from '../../themes/color';
import {BUTTON_DELAY_DURATION} from '../../constants/main_constant';
import {getStyleOfDevice} from '../../utils/responsive_util';
import tabletStyles from '../../assets/stylesheets/tablet/loginSelectionButtonComponentStyles';
import mobileStyles from '../../assets/stylesheets/mobile/loginSelectionButtonComponentStyles';

const styles = getStyleOfDevice(tabletStyles, mobileStyles);

const LoginSelectionButtonComponent = (props) => {
  const [disabled, setDisabled] = useState(false);
  const renderAudioButton = () => {
    return <CustomAudioPlayerButtonComponent
              audio={props.audio}
              buttonStyle={styles.audioBtn}
              itemUuid={props.uuid}
              playingUuid={props.playingUuid}
              updatePlayingUuid={props.updatePlayingUuid}
              accessibilityLabel={props.accessibilityLabel}
              buttonColor="transparent"
           />
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
    props.updatePlayingUuid(null);
    setDisabled(true);
    !!props.onPress && props.onPress();

    // Preventing the user from clicking the button mutiple times at once
    setTimeout(() => {
      setDisabled(false)
    }, BUTTON_DELAY_DURATION);
  }

  return (
    <TouchableOpacity onPress={() => onPress()} style={[styles.container, props.btnStyle]}
      disabled={disabled}
    >
      { renderGradientIcon() }
      <BoldLabelComponent label={props.label} style={styles.label} />
      { renderAudioButton() }
    </TouchableOpacity>
  )
}

export default LoginSelectionButtonComponent;