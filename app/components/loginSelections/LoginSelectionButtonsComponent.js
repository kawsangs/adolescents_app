import React from 'react';
import {useTranslation} from 'react-i18next';

import LoginSelectionButtonComponent from './LoginSelectionButtonComponent';
import LoginSelectionLineComponent from './LoginSelectionLineComponent';
import {navigationRef} from '../../navigators/app_navigator';

const LoginSelectionButtonsComponent = () => {
  const {t} = useTranslation();
  return (
    <React.Fragment>
      <LoginSelectionButtonComponent label={t('useWithPersonalInfo')} iconName="user" btnStyle={{marginTop: 18}}
        onPress={() => navigationRef.current?.navigate('BottomTabs')}
      />
      <LoginSelectionLineComponent/>
      <LoginSelectionButtonComponent label={t('useWithoutPersonalInfo')} iconName="user-x" />
    </React.Fragment>
  )
}

export default LoginSelectionButtonsComponent;