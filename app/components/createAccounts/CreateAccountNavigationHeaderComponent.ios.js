import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-paper';
import {useTranslation} from 'react-i18next';
import Icon from 'react-native-vector-icons/FontAwesome5';

import NavigationHeaderCloseButtonComponent from '../shared/navigationHeaders/NavigationHeaderCloseButtonComponent';
import HeaderWithDiscardAlertComponent from '../shared/HeaderWithDiscardAlertComponent';
import color from '../../themes/color';
import {largeFontSize} from '../../utils/font_size_util';
import asyncStorageService from '../../services/async_storage_service';
import {USER_INFO_CHANGED} from '../../constants/async_storage_constant';

const CreateAccountNavigationHeaderComponent = () => {
  const {t} = useTranslation();
  const confirmMessage = () => {
    return <View style={{flexDirection: "row"}}>
              <Icon name="exclamation" size={22} color={color.secondaryColor} />
              <Text style={{fontSize: largeFontSize(), marginLeft: 16}}>{t('doYouReallyWantToCancel')}</Text>
           </View>
  }

  const hasUserInfoChanged = async () => {
    return await asyncStorageService.getItem(USER_INFO_CHANGED);
  }

  return <HeaderWithDiscardAlertComponent
            title={t('provideIdentity')}
            leftButton={(onPress) => <NavigationHeaderCloseButtonComponent onPress={() => onPress()}/>}
            message={() => confirmMessage()}
            hasDiscardAlert={() => hasUserInfoChanged()}
            onGoBack={() => asyncStorageService.removeItem(USER_INFO_CHANGED)}
         />
}

export default CreateAccountNavigationHeaderComponent;