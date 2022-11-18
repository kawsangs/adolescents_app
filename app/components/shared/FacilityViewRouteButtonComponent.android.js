import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import {useTranslation} from 'react-i18next';

import BoldLabelComponent from '../shared/BoldLabelComponent';
import color from '../../themes/color';
import mapHelper from '../../helpers/map_helper';
import componentUtil from '../../utils/component_util';
import {isLowPixelDensityDevice} from '../../utils/responsive_util';
import {largeFontSize} from '../../utils/font_size_util';

const FacilityViewRouteButtonComponent = (props) => {
  const {t} = useTranslation();
  const openMap = () => {
    mapHelper.viewRoute(props.latitude, props.longitude, t('unableToViewTheRoute'));
  }

  const btnColor = () => {
    if (!props.latitude || !props.longitude)  return color.mutedColor;

    return color.primaryColor;
  }

  return <TouchableOpacity onPress={() => openMap()} style={[styles.btn, {borderColor: btnColor()}]} disabled={!props.latitude || !props.longitude}>
            <FontAwesome name='route' light size={props.iconSize || 20} color={btnColor()} />
            <BoldLabelComponent label={t('viewRoute')} style={{fontSize: largeFontSize(), marginLeft: 8, color: btnColor()}} />
          </TouchableOpacity>
}

const styles = StyleSheet.create({
  btn: {
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 56,
    borderWidth: 1.5,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 16,
    height: componentUtil.pressableItemSize(),
    width: isLowPixelDensityDevice() ? 160 : 200,
  }
});

export default FacilityViewRouteButtonComponent;