import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import {Text} from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';

import BoldLabelComponent from '../shared/BoldLabelComponent';
import FacilityDetailWorkingHourComponent from './FacilityDetailWorkingHourComponent';
import color from '../../themes/color';
import {screenHorizontalPadding} from '../../constants/component_constant';
import {xxLargeFontSize, xLargeFontSize} from '../../utils/font_size_util';
import componentUtil from '../../utils/component_util';

const FacilityDetailInfoComponent = () => {
  const renderButton = () => {
    return <TouchableOpacity style={styles.btnShowRoute}>
              <FontAwesome name='route' size={20} color={color.whiteColor} />
              <BoldLabelComponent label="បង្ហាញផ្លូវ" style={{fontSize: xLargeFontSize(), color: color.whiteColor, marginLeft: 8}} />
           </TouchableOpacity>
  }

  return (
    <View style={{paddingHorizontal: screenHorizontalPadding, paddingTop: 16}}>
      <BoldLabelComponent label="គ្លីនិកសុខភាពឯកទេសកម្ពុជា" style={{fontSize: xxLargeFontSize(), textAlign: 'center'}} />
      <Text style={{fontSize: xLargeFontSize(), textAlign: 'center', marginTop: 8}}>ផ្លូវ 310, ខ័ណ្ឌមានជ័យ រាជធានីភ្នំពេញ</Text>

      { renderButton() }
      <FacilityDetailWorkingHourComponent/>
    </View>
  )
}

const styles = StyleSheet.create({
  btnShowRoute: {
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

export default FacilityDetailInfoComponent;