import React from 'react';
import {useTranslation} from 'react-i18next';

import GradientScrollViewComponent from '../../components/shared/GradientScrollViewComponent';
import NavigationHeaderWithBackButtonComponent from '../../components/shared/NavigationHeaderWithBackButtonComponent';
import DeleteAccountQuestionnaireComponent from '../../components/deleteAccounts/DeleteAccountQuestionnaireComponent';

const DeleteAccountView = () => {
  const {t} = useTranslation();

  return (
    <GradientScrollViewComponent
      header={<NavigationHeaderWithBackButtonComponent label={t('deleteAccount')} />}
      body={<DeleteAccountQuestionnaireComponent/>}
      scrollViewStyle={{paddingBottom: 86, paddingTop: 16}}
      scrollable={true}
    />
  )
}

export default DeleteAccountView;