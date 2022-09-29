import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import {useTranslation} from 'react-i18next';

import BoldLabelComponent from '../shared/BoldLabelComponent';
import color from '../../themes/color';
import {xLargeFontSize} from '../../utils/font_size_util';
import componentUtil from '../../utils/component_util';

const FacilityDetailViewRouteButtonComponent = () => {
  const {t} = useTranslation();
  return <TouchableOpacity style={styles.btn}>
            <FontAwesome name='route' size={20} color={color.whiteColor} />
            <BoldLabelComponent label={t("viewRoute")} style={{fontSize: xLargeFontSize(), color: color.whiteColor, marginLeft: 8}} />
         </TouchableOpacity>
}

const styles = StyleSheet.create({
  btn: {
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: color.primaryColor,
    borderRadius: 56,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 16,
    height: componentUtil.mediumPressableItemSize(),
    width: 200,
  }
});

export default FacilityDetailViewRouteButtonComponent;