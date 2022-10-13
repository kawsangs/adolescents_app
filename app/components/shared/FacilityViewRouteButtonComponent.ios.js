import React from 'react';
import {TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import {useTranslation} from 'react-i18next';

import BoldLabelComponent from '../shared/BoldLabelComponent';
import color from '../../themes/color';
import {navigationRef} from '../../navigators/app_navigator';

const FacilityViewRouteButtonComponent = (props) => {
  const {t} = useTranslation();
  const openMap = () => {
    navigationRef.current?.navigate("FacilityMapView", {uuid: props.uuid});
  }

  return <TouchableOpacity onPress={() => openMap()} style={props.buttonStyle}>
            <FontAwesome name='route' light size={props.iconSize} color={props.iconColor || color.primaryColor} />
            <BoldLabelComponent label={t('viewRoute')} style={props.labelStyle} />
          </TouchableOpacity>
}

export default FacilityViewRouteButtonComponent;