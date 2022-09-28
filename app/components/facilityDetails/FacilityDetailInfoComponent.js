import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import {Text} from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';

import BoldLabelComponent from '../shared/BoldLabelComponent';
import FacilityDetailWorkingHourComponent from './FacilityDetailWorkingHourComponent';
import FacilityDetailServiceTagsComponent from './FacilityDetailServiceTagsComponent';
import FacilityDetailContactPlatformsComponent from './FacilityDetailContactPlatformsComponent';
import color from '../../themes/color';
import {screenHorizontalPadding, descriptionLineHeight} from '../../constants/component_constant';
import {xxLargeFontSize, xLargeFontSize, largeFontSize} from '../../utils/font_size_util';
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
      <Text style={{fontSize: largeFontSize(), textAlign: 'center', marginTop: 8}}>ផ្លូវ 310, ខ័ណ្ឌមានជ័យ រាជធានីភ្នំពេញ</Text>

      { renderButton() }
      <FacilityDetailWorkingHourComponent/>
      <FacilityDetailServiceTagsComponent/>
      <FacilityDetailContactPlatformsComponent/>

      <Text style={{fontSize: largeFontSize(), marginTop: 16, lineHeight: descriptionLineHeight}}>
        អ្នកអាចរកមេីលគ្លីនិកដែលនៅជិតលោកអ្នកជាមួយព័តិមានលំអិតអំពី សេវាកម្ម  ម៉ោងផ្តល់សេវា និងផែនទីងាយស្រួលក្នុងការរកទីតាំងគ្លីនិចនិមួយៗអ្នកអាចរកមេីលគ្លីនិកដែលនៅជិតលោកអ្នកជាមួយព័តិមានលំអិតអំពី សេវាកម្ម  ម៉ោងផ្តល់សេវា និងផែនទីងាយស្រួលក្នុងការរកទីតាំងគ្លីនិចនិមួយៗអ្នកអាចរកមេីលគ្លីនិកដែលនៅជិតលោកអ្នកជាមួយព័តិមានលំអិតអំពី សេវាកម្ម  ម៉ោងផ្តល់សេវា និងផែនទីងាយស្រួលក្នុងការរកទីតាំងគ្លីនិចនិមួយៗអ្នកអាចរកមេីលគ្លីនិកដែលនៅជិតលោកអ្នកជាមួយព័តិមានលំអិតអំពី សេវាកម្ម  ម៉ោងផ្តល់សេវា និងផែនទីងាយស្រួលក្នុងការរកទីតាំងគ្លីនិចនិមួយៗអ្នកអាចរកមេីលគ្លីនិកដែលនៅជិតលោកអ្នកជាមួយព័តិមានលំអិតអំពី សេវាកម្ម  ម៉ោងផ្តល់សេវា និងផែនទីងាយស្រួលក្នុងការរកទីតាំងគ្លីនិចនិមួយៗអ្នកអាចរកមេីលគ្លីនិកដែលនៅជិតលោកអ្នកជាមួយព័តិមានលំអិតអំពី សេវាកម្ម  ម៉ោងផ្តល់សេវា និងផែនទីងាយស្រួលក្នុងការរកទីតាំងគ្លីនិចនិមួយៗអ្នកអាចរកមេីលគ្លីនិកដែលនៅជិតលោកអ្នកជាមួយព័តិមានលំអិតអំពី សេវាកម្ម  ម៉ោងផ្តល់សេវា និងផែនទីងាយស្រួលក្នុងការរកទីតាំងគ្លីនិចនិមួយៗអ្នកអាចរកមេីលគ្លីនិកដែលនៅជិតលោកអ្នកជាមួយព័តិមានលំអិតអំពី សេវាកម្ម  ម៉ោងផ្តល់សេវា និងផែនទីងាយស្រួលក្នុងការរកទីតាំងគ្លីនិចនិមួយៗ ងាយស្រួលក្នុងការរកទីតាំងគ្លីនិចនិមួយៗអ្នកអាចរកមេីលគ្លីនិកដែលនៅជិតលោកអ្នកជាមួយព័តិមានលំអិតអំពី សេវាកម្ម  ម៉ោងផ្តល់សេវា និងផែនទីងាយស្រួលក្នុងការរកទីតាំងគ្លីនិចនិមួយៗអ្នកអាចរកមេីលគ្លីនិកដែលនៅជិតលោកអ្នកជាមួយព័តិមានលំអិតអំពី សេវាកម្ម  ម៉ោងផ្តល់សេវា និងផែនទីងាយស្រួលក្នុងការរកទីតាំងគ្លីនិចនិមួយៗ
      </Text>
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