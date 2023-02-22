import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';

import LoginSelectionButtonComponent from './LoginSelectionButtonComponent';
import LoginSelectionLineComponent from './LoginSelectionLineComponent';
import LoginSelectionAnonymousButtonComponent from './LoginSelectionAnonymousButtonComponent';
import {navigationRef} from '../../navigators/app_navigator';
import audioSources from '../../constants/audio_source_constant';

const LoginSelectionButtonsComponent = () => {
  const {t} = useTranslation();
  const [playingUuid, setPlayingUuid] = useState(null);

  return (
    <React.Fragment>
      <LoginSelectionButtonComponent
        uuid='register-button'
        label={t('register')}
        iconName="user"
        btnStyle={{marginTop: 18}}
        audio={audioSources["0.1.mp3"]}
        isAnonymous={false}
        playingUuid={playingUuid}
        updatePlayingUuid={(uuid) => setPlayingUuid(uuid)}
        onPress={() => navigationRef.current?.navigate('CreateAccountView')}
        accessibilityLabel='ប៊ូតុងទី1'
      />
      <LoginSelectionLineComponent/>
      <LoginSelectionAnonymousButtonComponent playingUuid={playingUuid} updatePlayingUuid={(uuid) => setPlayingUuid(uuid)} />
    </React.Fragment>
  )
}

export default LoginSelectionButtonsComponent;