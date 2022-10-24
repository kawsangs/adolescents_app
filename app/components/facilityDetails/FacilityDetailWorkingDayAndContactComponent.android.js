import React from 'react';
import {View} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {useTranslation} from 'react-i18next';

import BoldLabelComponent from '../shared/BoldLabelComponent';
import FacilityDetailWorkingDaysComponent from './FacilityDetailWorkingDaysComponent';
import color from '../../themes/color';
import {xxLargeFontSize} from '../../utils/font_size_util';

const FacilityDetailWorkingHourAndContactComponent = (props) => {
  const {t} = useTranslation();
  const renderTitle = (icon, label, style) => {
    return <View style={[{flexDirection: 'row', alignItems: 'center'}, style]}>
              <FeatherIcon name={icon} size={20} color={color.secondaryColor} style={{borderWidth: 0}} />
              <BoldLabelComponent label={label} style={{fontSize: xxLargeFontSize(), marginLeft: 12, marginTop: 2}} />
           </View>
  }

  return (
    <View style={{marginTop: 33, alignItems: 'center'}}>
      {renderTitle("clock", t("workingHours"), {marginLeft: -16})}

      <FacilityDetailWorkingDaysComponent workingDays={props.workingDays} />
    </View>
  )
}

export default FacilityDetailWorkingHourAndContactComponent;