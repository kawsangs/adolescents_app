import React from 'react';

import BigButtonComponent from '../BigButtonComponent';
import color from '../../../themes/color';
import audioSources from '../../../constants/audio_source_constant';

const PolicyConfirmationButtonComponent = (props) => {
  return <BigButtonComponent label='យល់ព្រម' style={{marginTop: 16}}
            uuid='confirm-button'
            audio={null}
            playingUuid={props.playingUuid}
            updatePlayingUuid={(uuid) => props.updatePlayingUuid(uuid)}
            disabled={!props.checked}
            onPress={() => props.saveUser()}
            accessibilityLabel='ប៊ូតុងយល់ព្រម'
            buttonColor={color.primaryColor}
            textColor={color.whiteColor}
            iconPrimaryColor={props.checked ? color.whiteColor : color.primaryColor}
         />
}

export default PolicyConfirmationButtonComponent;