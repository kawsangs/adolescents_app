import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';

import LoginSelectionButtonComponent from './LoginSelectionButtonComponent';
import LoginSelectionLineComponent from './LoginSelectionLineComponent';
import {navigationRef} from '../../navigators/app_navigator';
import appUserService from '../../services/app_user_service';

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
        label={t('useWithPersonalInfo')}
        iconName="user"
        btnStyle={{marginTop: 18}}
        audio={null}
        isAnonymous={false}
        playingUuid={playingUuid}
        updatePlayingUuid={(uuid) => setPlayingUuid(uuid)}
        onPress={() => navigationRef.current?.navigate('CreateAccountView', {user_uuid: null})}
      />
      <LoginSelectionLineComponent/>
      <LoginSelectionButtonComponent
        uuid='2'
        label={t('useWithoutPersonalInfo')}
        audio={null}
        isAnonymous={true}
        playingUuid={playingUuid}
        updatePlayingUuid={(uuid) => setPlayingUuid(uuid)}
        onPress={() => anonymousUse()}
      />
    </React.Fragment>
  )
}

export default LoginSelectionButtonsComponent;