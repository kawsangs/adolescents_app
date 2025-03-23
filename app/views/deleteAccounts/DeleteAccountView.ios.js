import React, {useEffect, useState} from 'react';
import {ActivityIndicator, View} from 'react-native';
import {useTranslation} from 'react-i18next';
import { useSelector } from 'react-redux';

import GradientScrollViewComponent from '../../components/shared/GradientScrollViewComponent';
import NavigationHeaderWithBackButtonComponent from '../../components/shared/NavigationHeaderWithBackButtonComponent';
import DeleteAccountQuestionnaireComponent from '../../components/deleteAccounts/DeleteAccountQuestionnaireComponent';
import color from '../../themes/color';
import reasonService from '../../services/reason_service';
import networkService from '../../services/network_service';
import Reason from '../../models/Reason';

const DeleteAccountView = () => {
  const {t} = useTranslation();
  const [isLoading, setIsLoading] = useState(false);
  const [reasons, setReasons] = useState(Reason.getAll());
  const appTheme = useSelector(state => state.appTheme.value);

  useEffect(() => {
    networkService.checkConnection(() => {
      setIsLoading(true);
      reasonService.syncData(() => {
        setReasons(Reason.getAll());
        setIsLoading(false);
      }, () => {
        setIsLoading(false);
      })
    });
  }, []);

  const renderContent = () => {
    if (isLoading)
      return <View style={{flex: 1, justifyContent: 'center'}}><ActivityIndicator size="large" color={appTheme.primary_text_color ?? color.whiteColor} /></View>

    return <DeleteAccountQuestionnaireComponent reasons={reasons}/>
  }

  return (
    <GradientScrollViewComponent
      header={<NavigationHeaderWithBackButtonComponent label={t('deleteAccount')} />}
      body={renderContent()}
      scrollViewStyle={{paddingBottom: 86, paddingTop: 16}}
      scrollable={true}
    />
  )
}

export default DeleteAccountView;