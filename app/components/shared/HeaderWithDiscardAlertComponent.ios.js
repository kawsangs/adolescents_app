import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import { useDispatch } from 'react-redux';

import NavigationHeaderComponent from './NavigationHeaderComponent';
import AlertModalComponent from './AlertModalComponent';
import {navigationRef} from '../../navigators/app_navigator';
import {setPlayingAudio} from '../../features/audios/currentPlayingAudioSlice';

const HeaderWidthDiscardAlertComponent = (props) => {
  const dispatch = useDispatch();
  const {t} = useTranslation();
  const [modalVisible, setModalVisible] = useState(false);

  const onLeftBtnPress = async () => {
    dispatch(setPlayingAudio('null'));
    if (await props.hasDiscardAlert())
      return setModalVisible(true);

    goBack();
  }

  const goBack = () => {
    props.onGoBack();
    navigationRef.current?.goBack();
  }

  return (
    <React.Fragment>
      <NavigationHeaderComponent
        leftButton={props.leftButton(() => onLeftBtnPress())}
        label={t('provideIdentity')}
      />
      <AlertModalComponent
        visible={modalVisible}
        message={props.message}
        onDismiss={() => setModalVisible(false)}
        onConfirm={() => goBack()}
        leftButtonLabel={t('continue')}
        rightButtonLabel={t('cancel')}
      />
    </React.Fragment>
  )
}

export default HeaderWidthDiscardAlertComponent;