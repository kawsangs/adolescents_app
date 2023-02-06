import React from 'react';
import AudioPlayerButton from 'react-native-audio-player-button';
import color from '../../themes/color';
import componentUtil from '../../utils/component_util';

const CustomAudioPlayerButtonComponent = (props) => {
  const btnSize = componentUtil.pressableItemSize()
  const rippleProps = props.rippled ? {
    buttonHeight: btnSize,
    buttonWidth: btnSize,
    rippleHeight: btnSize,
    rippleWidth: btnSize
  } : {};

  return <AudioPlayerButton
            {...props}
            {...rippleProps}
            isSpeakerIcon={true}
            iconSize={24}
            iconPrimaryColor={color.primaryColor}
            iconSecondaryColor={color.secondaryColor}
            allowPause={true}
         />
}

export default CustomAudioPlayerButtonComponent;