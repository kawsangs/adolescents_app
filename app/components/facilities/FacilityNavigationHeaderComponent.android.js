import React from 'react';
import {useTranslation} from 'react-i18next';

import NavigationHeaderComponent from '../shared/NavigationHeaderComponent';
import NavigationHeaderMenuButtonComponent from '../shared/navigationHeaders/NavigationHeaderMenuButtonComponent';
import FacilityNavigationHeaderRightButtonsComponent from './FacilityNavigationHeaderRightButtonsComponent';

const FacilityNavigationHeaderComponent = (props) => {
  const {t} = useTranslation();
  return (
    <NavigationHeaderComponent
      leftButton={<NavigationHeaderMenuButtonComponent navigation={props.navigation}/>}
      label={t('clinic')}
      rightButton={<FacilityNavigationHeaderRightButtonsComponent isListView={props.isListView} updateIsListView={props.updateIsListView} />}
    />
  )
}

export default FacilityNavigationHeaderComponent;