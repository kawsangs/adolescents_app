import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Text} from 'react-native-paper';
import {useTranslation} from 'react-i18next';
import { useSelector } from 'react-redux';

import NavigationHeaderComponent from '../shared/NavigationHeaderComponent';
import NavigationHeaderBackButtonComponent from '../shared/NavigationHeaderBackButtonComponent';

import color from '../../themes/color';
import {xLargeFontSize} from '../../utils/font_size_util';
import componentUtil from '../../utils/component_util';
import {screenHorizontalPadding} from '../../constants/component_constant';

const FacilityFilterNavigationHeaderComponent = (props) => {
  const {t} = useTranslation();
  const appTheme = useSelector(state => state.appTheme.value);
  const renderResetBtn = () => {
    return <TouchableOpacity onPress={() => props.markAsReset()} style={{height: componentUtil.pressableItemSize(), justifyContent: 'center'}}>
              <Text style={{color: appTheme.primary_text_color ?? color.whiteColor, fontSize: xLargeFontSize()}}>{t('reset')}</Text>
           </TouchableOpacity>
  }

  return (
    <NavigationHeaderComponent
      leftButton={<NavigationHeaderBackButtonComponent/>}
      label={t('filterClinic')}
      rightButton={renderResetBtn()}
      headerStyle={{paddingRight: screenHorizontalPadding}}
    />
  )
}

export default FacilityFilterNavigationHeaderComponent;