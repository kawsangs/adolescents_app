import React from 'react';
import {View} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {useTranslation} from 'react-i18next';

import BoldLabelComponent from '../shared/BoldLabelComponent';
import FacilityDetailWorkingDaysComponent from './FacilityDetailWorkingDaysComponent';
import FacilityDetailContactNumbersComponent from './FacilityDetailContactNumbersComponent';
import color from '../../themes/color';
import {xxLargeFontSize} from '../../utils/font_size_util';

const FacilityDetailWorkingHourAndContactComponent = (props) => {
  const {t} = useTranslation();
  const renderTitle = (icon, label) => {
    return <View style={{flexDirection: 'row', alignItems: 'center', marginLeft: 16}}>
              <FeatherIcon name={icon} size={20} color={color.secondaryColor} style={{borderWidth: 0}} />
              <BoldLabelComponent label={label} style={{fontSize: xxLargeFontSize(), marginLeft: 12, marginTop: 2}} />
           </View>
  }

  return (
    <View style={{flexDirection: 'row', marginTop: 17}}>
      <View style={{flex: 3, borderRightWidth: 1, borderRightColor: color.grayColor}}>
        {renderTitle("clock", t("workingHours"))}
        <FacilityDetailWorkingDaysComponent workingDays={props.workingDays} />
      </View>
      <View style={{flex: 2}}>
        {renderTitle("phone", t("phone"))}
        <FacilityDetailContactNumbersComponent contactNumbers={props.contactNumbers} />
      </View>
    </View>
  )
}

export default FacilityDetailWorkingHourAndContactComponent;