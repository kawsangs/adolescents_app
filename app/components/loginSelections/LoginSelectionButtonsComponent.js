import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';

import LoginSelectionButtonComponent from './LoginSelectionButtonComponent';
import LoginSelectionLineComponent from './LoginSelectionLineComponent';
import {navigationRef} from '../../navigators/app_navigator';
import appUserService from '../../services/app_user_service';
import safetyPlan from '../../assets/audios/safety_plan.mp3';
import yourStory from '../../assets/audios/your_story.mp3';

const LoginSelectionButtonsComponent = () => {
  const {t} = useTranslation();
  const [playingUuid, setPlayingUuid] = useState(null);

  const anonymousUse = () => {
    appUserService.createAnonymousUser();
    navigationRef.current?.navigate('BottomTabs');
  }

  return (
    <React.Fragment>
      <LoginSelectionButtonComponent
        uuid='1'
        label={t('useWithPersonalInfo')}
        iconName="user"
        btnStyle={{marginTop: 18}}
        audio={safetyPlan}
        playingUuid={playingUuid}
        updatePlayingUuid={(uuid) => setPlayingUuid(uuid)}
        onPress={() => navigationRef.current?.navigate('CreateAccountView')}
      />
      <LoginSelectionLineComponent/>
      <LoginSelectionButtonComponent
        uuid='2'
        label={t('useWithoutPersonalInfo')}
        iconName="user-x"
        audio={yourStory}
        playingUuid={playingUuid}
        updatePlayingUuid={(uuid) => setPlayingUuid(uuid)}
        onPress={() => anonymousUse()}
      />
    </React.Fragment>
  )
}

export default LoginSelectionButtonsComponent;