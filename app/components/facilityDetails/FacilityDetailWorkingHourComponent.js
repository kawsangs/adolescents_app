import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import {Text} from 'react-native-paper';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {useTranslation} from 'react-i18next';

import BoldLabelComponent from '../shared/BoldLabelComponent';
import color from '../../themes/color';
import {xxLargeFontSize, largeFontSize} from '../../utils/font_size_util';
import translationHelper from '../../helpers/translation_helper';

const FacilityDetailWorkingHourComponent = () => {
  const {i18n} = useTranslation();
  const renderTitle = (icon, label) => {
    return <View style={{flexDirection: 'row', alignItems: 'center', marginLeft: 16}}>
              <FeatherIcon name={icon} size={20} color={color.secondaryColor} style={{borderWidth: 0}} />
              <BoldLabelComponent label={label} style={{fontSize: xxLargeFontSize(), marginLeft: 12, marginTop: 2}} />
           </View>
  }

  const renderWorkingHours = () => {
    return <View style={{marginTop: 18}}>
              <Text style={{fontSize: largeFontSize()}}>ច័ន្ទ - សុក្រ</Text>
              <Text style={{fontSize: largeFontSize()}}>០៨:០០ ព្រឹក - ០៤:០០ ល្ងាច</Text>

              <Text style={{fontSize: largeFontSize(), marginTop: 16}}>សៅរ៏</Text>
              <Text style={{fontSize: largeFontSize()}}>០៩:០០ ព្រឹក - ១២:០០ ល្ងាច</Text>
           </View>
  }

  const renderContactNumbers = () => {
    const numbers = ["012 44 44 44", "092 21 21 21", "097 34 55 345"];

    return numbers.map((number, index) => {
      return <Text key={index} style={{fontSize: largeFontSize(), marginTop: 16, marginLeft: 8}}>
                {translationHelper.translateNumber(number, i18n.language)}
             </Text>
    });
  }

  return (
    <View style={{flexDirection: 'row', marginTop: 17}}>
      <View style={{flex: 3, borderRightWidth: 1, borderRightColor: color.grayColor,}}>
        {renderTitle("clock", "ម៉ោងធ្វើការ")}
        {renderWorkingHours()}
      </View>
      <View style={{flex: 2}}>
        {renderTitle("phone", "ទូរស័ព្ទ")}
        {renderContactNumbers()}
      </View>
    </View>
  )
}

export default FacilityDetailWorkingHourComponent;