import React from 'react';
import {useTranslation} from 'react-i18next';

import BigButtonComponent from '../shared/BigButtonComponent';
import FormBottomSheetModalComponent from '../shared/FormBottomSheetModalComponent';
import PolicyConfirmationModalComponent from '../shared/PolicyConfirmationModalComponent';
import {signUpConfirmationSnapPoints} from '../../constants/modal_constant';
import audioSources from '../../constants/audio_source_constant';
import {getStyleOfDevice} from '../../utils/responsive_util';

const CreateAccountSaveButtonComponent = (props) => {
  const {t} = useTranslation();
  let bottomSheetRef = React.createRef();
  let modalRef = React.createRef();
  const showConfirmModal = () => {
    bottomSheetRef.current?.setBodyContent(<PolicyConfirmationModalComponent saveUser={props.saveUser}/>)
    modalRef.current?.present()
  }

  return (
    <React.Fragment>
      <BigButtonComponent label={t('saveAndLogin')} style={{marginTop: getStyleOfDevice(32, 16)}}
        uuid='save-button'
        audio={audioSources["0.13.mp3"]}
        playingUuid={props.playingUuid}
        updatePlayingUuid={(uuid) => props.updatePlayingUuid(uuid)}
        disabled={!props.isValid}
        onPress={() => showConfirmModal()}
        accessibilityLabel='ប៊ូតុងក្រោមគេ'
      />
      <FormBottomSheetModalComponent ref={bottomSheetRef} formModalRef={modalRef} snapPoints={signUpConfirmationSnapPoints} onDismiss={() => bottomSheetRef.current?.setBodyContent(null)} />
    </React.Fragment>
  )
}

export default CreateAccountSaveButtonComponent;