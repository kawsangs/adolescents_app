import React from 'react';
import {useTranslation} from 'react-i18next';
import { useDispatch } from 'react-redux';

import LoginSelectionButtonComponent from './LoginSelectionButtonComponent';
import FormBottomSheetModalComponent from '../shared/FormBottomSheetModalComponent';
import PolicyConfirmationModalComponent from '../shared/PolicyConfirmationModalComponent';
import {signUpConfirmationSnapPoints} from '../../constants/modal_constant';
import audioSources from '../../constants/audio_source_constant';
import {navigationRef} from '../../navigators/app_navigator';
import appUserService from '../../services/app_user_service';
import {environment} from '../../config/environment';
import {setPlayingAudio} from '../../features/audios/currentPlayingAudioSlice';

const LoginSelectionAnonymousButtonComponent = (props) => {
  const dispatch = useDispatch();
  const {t} = useTranslation();
  let bottomSheetRef = React.createRef();
  let modalRef = React.createRef();
  const saveUser = () => {
    appUserService.createAnonymousUser();
    navigationRef.current?.reset({ index: 0, routes: [{ name: 'DrawerNavigator' }]});
  }

  const onPress = () => {
    dispatch(setPlayingAudio('null'));
    if (environment.hasPrivacyConfirmation) {
      bottomSheetRef.current?.setBodyContent(<PolicyConfirmationModalComponent saveUser={() => saveUser()} />)
      modalRef.current?.present()
      return
    }
    saveUser()
  }

  return (
    <React.Fragment>
      <LoginSelectionButtonComponent
        uuid='anonymous-button'
        label={t('loginAsGuest')}
        audio={audioSources["0.2.mp3"]}
        isAnonymous={true}
        onPress={() => onPress()}
        accessibilityLabel='ប៊ូតុងទី2'
      />

      <FormBottomSheetModalComponent ref={bottomSheetRef} formModalRef={modalRef} snapPoints={signUpConfirmationSnapPoints} onDismiss={() => bottomSheetRef.current?.setBodyContent(null)} />
    </React.Fragment>
  )
}

export default LoginSelectionAnonymousButtonComponent;