import React from 'react';
import {TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import {useTranslation} from 'react-i18next';

import BoldLabelComponent from '../shared/BoldLabelComponent';
import color from '../../themes/color';
import mapHelper from '../../helpers/map_helper';

const FacilityViewRouteButtonComponent = (props) => {
  const {t} = useTranslation();
  const openMap = () => {
    mapHelper.viewRoute(props.latitude, props.longitude, t('unableToViewTheRoute'));
  }

  const colorSet = () => {
    if (!props.latitude || !props.longitude)  return color.mutedColor;

    return { icon: props.iconColor || color.primaryColor, text: props.textColor || color.whiteColor }
  }

  return <TouchableOpacity onPress={() => openMap()} style={props.buttonStyle} disabled={!props.latitude || !props.longitude}>
            <FontAwesome name='route' light size={props.iconSize} color={colorSet().icon} />
            <BoldLabelComponent label={t('viewRoute')} style={[props.labelStyle, { color: colorSet().text }]} />
          </TouchableOpacity>
}

export default FacilityViewRouteButtonComponent;