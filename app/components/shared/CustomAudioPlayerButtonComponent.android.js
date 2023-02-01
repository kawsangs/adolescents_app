import React from 'react';
import AudioPlayerButton from 'react-native-audio-player-button';
import color from '../../themes/color';

const CustomAudioPlayerButtonComponent = (props) => {
  return <AudioPlayerButton
            {...props}
            isSpeakerIcon={true}
            iconSize={24}
            iconPrimaryColor={color.primaryColor}
            iconSecondaryColor={color.secondaryColor}
         />
}

export default CustomAudioPlayerButtonComponent;