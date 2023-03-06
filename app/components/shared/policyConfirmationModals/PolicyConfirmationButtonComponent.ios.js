import React from 'react';

import BigButtonComponent from '../BigButtonComponent';
import color from '../../../themes/color';
import audioSources from '../../../constants/audio_source_constant';

const PolicyConfirmationButtonComponent = (props) => {
  return <BigButtonComponent label='យល់ព្រម' style={{marginTop: 16}}
            uuid='confirm-button'
            audio={audioSources['0.40.mp3']}
            playingUuid={props.playingUuid}
            updatePlayingUuid={(uuid) => props.updatePlayingUuid(uuid)}
            onPress={() => props.saveUser()}
            accessibilityLabel='ប៊ូតុងយល់ព្រម'
            buttonColor={color.primaryColor}
            textColor={color.whiteColor}
            iconPrimaryColor={color.whiteColor}
         />
}

export default PolicyConfirmationButtonComponent;