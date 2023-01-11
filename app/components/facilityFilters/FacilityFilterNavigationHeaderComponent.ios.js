import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Text} from 'react-native-paper';
import {useTranslation} from 'react-i18next';
import { useDispatch } from 'react-redux';

import NavigationHeaderComponent from '../shared/NavigationHeaderComponent';
import NavigationHeaderBackButtonComponent from '../shared/NavigationHeaderBackButtonComponent';

import color from '../../themes/color';
import {xLargeFontSize} from '../../utils/font_size_util';
import { resetSelectedLocation } from '../../features/facilities/filterFacilityLocationSlice';
import {screenHorizontalPadding} from '../../constants/component_constant';
import {navigationRef} from '../../navigators/app_navigator';

const FacilityFilterNavigationHeaderComponent = () => {
  const {t} = useTranslation();
  const dispatch = useDispatch();

  const resetFilter = () => {
    dispatch(resetSelectedLocation());
    navigationRef.current?.goBack();
  }

  const renderResetBtn = () => {
    return <TouchableOpacity onPress={() => resetFilter()}>
              <Text style={{color: color.whiteColor, fontSize: xLargeFontSize()}}>{t('filterReset')}</Text>
           </TouchableOpacity>
  }

  return (
    <NavigationHeaderComponent
      leftButton={<NavigationHeaderBackButtonComponent/>}
      label={'Filter Clinic'}
      rightButton={renderResetBtn()}
      headerStyle={{paddingRight: screenHorizontalPadding}}
    />
  )
}

export default FacilityFilterNavigationHeaderComponent;