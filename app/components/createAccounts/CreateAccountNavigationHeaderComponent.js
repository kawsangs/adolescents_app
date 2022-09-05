import React from 'react';
import {useTranslation} from 'react-i18next';

import NavigationHeaderComponent from '../shared/NavigationHeaderComponent';
import NavigationHeaderCloseButtonComponent from '../shared/navigationHeaders/NavigationHeaderCloseButtonComponent';

const CreateAccountNavigationHeaderComponent = () => {
  const {t} = useTranslation();
  return <NavigationHeaderComponent
            leftButton={<NavigationHeaderCloseButtonComponent/>}
            label={t('provideIdentity')}
         />
}

export default CreateAccountNavigationHeaderComponent;