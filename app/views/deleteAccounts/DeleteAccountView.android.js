import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-paper';
import {useTranslation} from 'react-i18next';

import GradientScrollViewComponent from '../../components/shared/GradientScrollViewComponent';
import NavigationHeaderWithBackButtonComponent from '../../components/shared/NavigationHeaderWithBackButtonComponent';

const DeleteAccountView = () => {
  const {t} = useTranslation();

  const renderContent = () => {
    return <View>
              <Text>Delete account</Text>
           </View>
  }

  return (
    <GradientScrollViewComponent
      header={<NavigationHeaderWithBackButtonComponent label={t('deleteAccount')} />}
      body={renderContent()}
      scrollViewStyle={{paddingBottom: 86}}
      scrollable={true}
    />
  )
}

export default DeleteAccountView;