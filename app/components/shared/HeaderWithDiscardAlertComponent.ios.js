import React, {useEffect, useState} from 'react';
import {BackHandler} from 'react-native';
import {useTranslation} from 'react-i18next';
import { useDispatch } from 'react-redux';

import NavigationHeaderComponent from './NavigationHeaderComponent';
import AlertModalComponent from './AlertModalComponent';
import {navigationRef} from '../../navigators/app_navigator';
import {setPlayingAudio} from '../../features/audios/currentPlayingAudioSlice';

const HeaderWithDiscardAlertComponent = (props) => {
  const dispatch = useDispatch();
  const {t} = useTranslation();
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      setModalVisible(true);
      return true;
    })
    return () => !!backHandler && backHandler.remove()
  }, [])

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
        label={props.title}
        customTitle={props.customTitle}
      />
      <AlertModalComponent
        visible={modalVisible}
        message={props.message}
        onDismiss={() => setModalVisible(false)}
        onConfirm={() => goBack()}
        leftButtonLabel={props.leftButtonLabel || t('continue')}
        rightButtonLabel={props.rightButtonLabel || t('cancel')}
      />
    </React.Fragment>
  )
}

export default HeaderWithDiscardAlertComponent;