import React from 'react';
import {useTranslation} from 'react-i18next';

import LoginSelectionButtonComponent from './LoginSelectionButtonComponent';
import FormBottomSheetModalComponent from '../shared/FormBottomSheetModalComponent';
import PolicyConfirmationModalComponent from '../shared/PolicyConfirmationModalComponent';
import {signUpConfirmationSnapPoints} from '../../constants/modal_constant';
import audioSources from '../../constants/audio_source_constant';
import {navigationRef} from '../../navigators/app_navigator';
import appUserService from '../../services/app_user_service';

const LoginSelectionAnonymousButtonComponent = (props) => {
  const {t} = useTranslation();
  let bottomSheetRef = React.createRef();
  let modalRef = React.createRef();
  const saveUser = () => {
    appUserService.createAnonymousUser();
    navigationRef.current?.reset({ index: 0, routes: [{ name: 'DrawerNavigator' }]});
  }

  const showConfirmModal = () => {
    bottomSheetRef.current?.setBodyContent(<PolicyConfirmationModalComponent saveUser={() => saveUser()}/>)
    modalRef.current?.present()
  }

  return (
    <React.Fragment>
      <LoginSelectionButtonComponent
        uuid='anonymous-button'
        label={t('loginAsGuest')}
        audio={audioSources["0.2.mp3"]}
        isAnonymous={true}
        playingUuid={props.playingUuid}
        updatePlayingUuid={(uuid) => props.updatePlayingUuid(uuid)}
        onPress={() => showConfirmModal()}
        accessibilityLabel='ប៊ូតុងទី2'
      />

      <FormBottomSheetModalComponent ref={bottomSheetRef} formModalRef={modalRef} snapPoints={signUpConfirmationSnapPoints} onDismiss={() => bottomSheetRef.current?.setBodyContent(null)} />
    </React.Fragment>
  )
}

export default LoginSelectionAnonymousButtonComponent;