import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import IonIcon from 'react-native-vector-icons/Ionicons';

import GradientViewComponent from '../shared/GradientViewComponent';
import BoldLabelComponent from '../shared/BoldLabelComponent';
import PlayAudioComponent from '../shared/PlayAudioComponent';
import AnonymousIconComponent from '../shared/AnonymousIconComponent';
import color from '../../themes/color';
import {BUTTON_DELAY_DURATION} from '../../constants/main_constant';
import {getStyleOfDevice} from '../../utils/responsive_util';
import tabletStyles from '../../assets/stylesheets/tablet/loginSelectionButtonComponentStyles';
import mobileStyles from '../../assets/stylesheets/mobile/loginSelectionButtonComponentStyles';

const styles = getStyleOfDevice(tabletStyles, mobileStyles);

const LoginSelectionButtonComponent = (props) => {
  const [disabled, setDisabled] = useState(false);
  const renderAudioButton = () => {
    return <PlayAudioComponent
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