import React from 'react';
import {useTranslation} from 'react-i18next';

import BigButtonComponent from '../BigButtonComponent';
import color from '../../../themes/color';
import audioSources from '../../../constants/audio_source_constant';

const PolicyConfirmationButtonComponent = (props) => {
  const {t} = useTranslation();
  return <BigButtonComponent label={t('confirm')} style={{marginTop: 16}}
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