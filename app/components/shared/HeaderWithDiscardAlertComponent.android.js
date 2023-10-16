import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import Icon from 'react-native-vector-icons/FontAwesome5';

import NavigationHeaderComponent from './NavigationHeaderComponent';
import AlertModalComponent from './AlertModalComponent';
import {navigationRef} from '../../navigators/app_navigator';

const HeaderWidthDiscardAlertComponent = (props) => {
  const {t} = useTranslation();
  const [modalVisible, setModalVisible] = useState(false);

  const onLeftBtnPress = async () => {
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

export default HeaderWidthDiscardAlertComponent;