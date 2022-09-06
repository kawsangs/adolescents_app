import React from 'react';
import {useTranslation} from 'react-i18next';

import NavigationHeaderComponent from '../shared/NavigationHeaderComponent';
import NavigationHeaderCloseButtonComponent from '../shared/navigationHeaders/NavigationHeaderCloseButtonComponent';
import {navigationRef} from '../../navigators/app_navigator';

const CreateAccountNavigationHeaderComponent = () => {
  const {t} = useTranslation();
  return <NavigationHeaderComponent
            leftButton={<NavigationHeaderCloseButtonComponent onPress={() => navigationRef.current?.goBack()}/>}
            label={t('provideIdentity')}
         />
}

export default CreateAccountNavigationHeaderComponent;