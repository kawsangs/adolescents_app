import React from 'react';
import {View} from 'react-native';
import { useTranslation } from 'react-i18next';

import IntroPressableLabelComponent from './IntroPressableLabelComponent';
import color from '../../themes/color';
import componentUtil from '../../utils/component_util';

const IntroDoneButtonComponent = (props) => {
  const { t } = useTranslation();
  return (
    <View style={{alignItems: 'center', backgroundColor: color.primaryColor, borderRadius: 40, elevation: 4, height: componentUtil.mediumPressableItemSize(), justifyContent: 'center', width: '60%', alignSelf: 'center'}}>
      <IntroPressableLabelComponent label={ t('startUsingApp') } labelStyle={{color: color.whiteColor}} containerStyle={{width: '100%'}} />
    </View>
  )
}

export default IntroDoneButtonComponent;