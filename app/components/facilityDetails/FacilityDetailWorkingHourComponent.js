import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import {Text} from 'react-native-paper';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {useTranslation} from 'react-i18next';

import BoldLabelComponent from '../shared/BoldLabelComponent';
import color from '../../themes/color';
import {xxLargeFontSize, largeFontSize} from '../../utils/font_size_util';
import translationHelper from '../../helpers/translation_helper';
import contactHelper from '../../helpers/contact_helper';
import {PHONE} from '../../constants/contact_constant';

const FacilityDetailWorkingHourComponent = (props) => {
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
    return props.contactNumbers.map((number, index) => {
      return <TouchableOpacity key={index} style={{justifyContent: 'center', height: 30, marginTop: 12, borderWidth: 0}}
                onPress={() => contactHelper.openContactLink(PHONE, number)}
             >
                <Text style={{fontSize: largeFontSize(), marginLeft: 8,  color: color.primaryColor}}>
                    {translationHelper.translateNumber(contactHelper.getFormattedPhoneNumber(number), i18n.language)}
                </Text>
             </TouchableOpacity>
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