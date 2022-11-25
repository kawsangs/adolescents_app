import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';

import LoginSelectionButtonComponent from './LoginSelectionButtonComponent';
import LoginSelectionLineComponent from './LoginSelectionLineComponent';
import {navigationRef} from '../../navigators/app_navigator';
import appUserService from '../../services/app_user_service';
import audioSources from '../../constants/audio_source_constant';

const LoginSelectionButtonsComponent = () => {
  const {t} = useTranslation();
  const [playingUuid, setPlayingUuid] = useState(null);

  const anonymousUse = () => {
    appUserService.createAnonymousUser();
    navigationRef.current?.reset({ index: 0, routes: [{ name: 'DrawerNavigator' }]});
  }

  return (
    <React.Fragment>
      <LoginSelectionButtonComponent
        uuid='1'
        label={t('register')}
        iconName="user"
        btnStyle={{marginTop: 18}}
        audio={audioSources["0.1.mp3"]}
        isAnonymous={false}
        playingUuid={playingUuid}
        updatePlayingUuid={(uuid) => setPlayingUuid(uuid)}
        onPress={() => navigationRef.current?.navigate('CreateAccountView')}
      />
      <LoginSelectionLineComponent/>
      <LoginSelectionButtonComponent
        uuid='2'
        label={t('loginAsGuest')}
        audio={audioSources["0.2.mp3"]}
        isAnonymous={true}
        playingUuid={playingUuid}
        updatePlayingUuid={(uuid) => setPlayingUuid(uuid)}
        onPress={() => anonymousUse()}
      />
    </React.Fragment>
  )
}

export default LoginSelectionButtonsComponent;