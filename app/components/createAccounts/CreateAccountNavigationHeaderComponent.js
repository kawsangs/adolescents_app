import React from 'react';
import {Text} from 'react-native-paper';
import {useTranslation} from 'react-i18next';

import NavigationHeaderCloseButtonComponent from '../shared/navigationHeaders/NavigationHeaderCloseButtonComponent';
import HeaderWithDiscardAlertComponent from '../shared/HeaderWithDiscardAlertComponent';
import {largeFontSize} from '../../utils/font_size_util';
import asyncStorageService from '../../services/async_storage_service';
import {USER_INFO_CHANGED} from '../../constants/async_storage_constant';

const CreateAccountNavigationHeaderComponent = () => {
  const {t} = useTranslation();
  const confirmMessage = () => {
    return <Text style={{fontSize: largeFontSize()}}>{t('doYouReallyWantToCancel')}</Text>
  }

  const hasUserInfoChanged = async () => {
    return await asyncStorageService.getItem(USER_INFO_CHANGED);
  }

  return <HeaderWithDiscardAlertComponent
            leftButton={(onPress) => <NavigationHeaderCloseButtonComponent onPress={() => onPress()}/>}
            message={() => confirmMessage()}
            hasDiscardAlert={() => hasUserInfoChanged()}
            onGoBack={() => asyncStorageService.removeItem(USER_INFO_CHANGED)}
         />
}

export default CreateAccountNavigationHeaderComponent;