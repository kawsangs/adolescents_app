import React, {useEffect, useState} from 'react';
import {ActivityIndicator, View} from 'react-native';
import {useTranslation} from 'react-i18next';

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

  useEffect(() => {
    networkService.checkConnection(() => {
      setIsLoading(true);
      reasonService.syncData(() => {
        console.log('=== load reason success ===')
        setReasons(Reason.getAll());
        setIsLoading(false);
      }, () => {
        console.log('== load reason failed ==')
        setIsLoading(false);
      })
    });
  }, []);

  const renderContent = () => {
    if (isLoading) 
      return <View style={{flex: 1, justifyContent: 'center'}}><ActivityIndicator size="large" color={color.primaryColor} /></View>

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