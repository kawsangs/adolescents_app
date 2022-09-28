import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-paper';

import FacilityDetailTitleComponent from './FacilityDetailTitleComponent';
import FacilityDetailViewRouteButtonComponent from './FacilityDetailViewRouteButtonComponent';
import FacilityDetailWorkingHourComponent from './FacilityDetailWorkingHourComponent';
import FacilityDetailServiceTagsComponent from './FacilityDetailServiceTagsComponent';
import FacilityDetailContactPlatformsComponent from './FacilityDetailContactPlatformsComponent';
import {screenHorizontalPadding, descriptionLineHeight} from '../../constants/component_constant';
import {largeFontSize} from '../../utils/font_size_util';

const FacilityDetailInfoComponent = (props) => {
  return (
    <View style={{paddingHorizontal: screenHorizontalPadding, paddingTop: 16}}>
      <FacilityDetailTitleComponent/>
      <FacilityDetailViewRouteButtonComponent/>
      <FacilityDetailWorkingHourComponent/>
      <FacilityDetailServiceTagsComponent/>
      <FacilityDetailContactPlatformsComponent/>

      <Text style={{fontSize: largeFontSize(), marginTop: 16, lineHeight: descriptionLineHeight}}>
        អ្នកអាចរកមេីលគ្លីនិកដែលនៅជិតលោកអ្នកជាមួយព័តិមានលំអិតអំពី សេវាកម្ម  ម៉ោងផ្តល់សេវា និងផែនទីងាយស្រួលក្នុងការរកទីតាំងគ្លីនិចនិមួយៗអ្នកអាចរកមេីលគ្លីនិកដែលនៅជិតលោកអ្នកជាមួយព័តិមានលំអិតអំពី សេវាកម្ម  ម៉ោងផ្តល់សេវា និងផែនទីងាយស្រួលក្នុងការរកទីតាំងគ្លីនិចនិមួយៗអ្នកអាចរកមេីលគ្លីនិកដែលនៅជិតលោកអ្នកជាមួយព័តិមានលំអិតអំពី សេវាកម្ម  ម៉ោងផ្តល់សេវា និងផែនទីងាយស្រួលក្នុងការរកទីតាំងគ្លីនិចនិមួយៗអ្នកអាចរកមេីលគ្លីនិកដែលនៅជិតលោកអ្នកជាមួយព័តិមានលំអិតអំពី សេវាកម្ម  ម៉ោងផ្តល់សេវា និងផែនទីងាយស្រួលក្នុងការរកទីតាំងគ្លីនិចនិមួយៗអ្នកអាចរកមេីលគ្លីនិកដែលនៅជិតលោកអ្នកជាមួយព័តិមានលំអិតអំពី សេវាកម្ម  ម៉ោងផ្តល់សេវា និងផែនទីងាយស្រួលក្នុងការរកទីតាំងគ្លីនិចនិមួយៗអ្នកអាចរកមេីលគ្លីនិកដែលនៅជិតលោកអ្នកជាមួយព័តិមានលំអិតអំពី សេវាកម្ម  ម៉ោងផ្តល់សេវា និងផែនទីងាយស្រួលក្នុងការរកទីតាំងគ្លីនិចនិមួយៗអ្នកអាចរកមេីលគ្លីនិកដែលនៅជិតលោកអ្នកជាមួយព័តិមានលំអិតអំពី សេវាកម្ម  ម៉ោងផ្តល់សេវា និងផែនទីងាយស្រួលក្នុងការរកទីតាំងគ្លីនិចនិមួយៗអ្នកអាចរកមេីលគ្លីនិកដែលនៅជិតលោកអ្នកជាមួយព័តិមានលំអិតអំពី សេវាកម្ម  ម៉ោងផ្តល់សេវា និងផែនទីងាយស្រួលក្នុងការរកទីតាំងគ្លីនិចនិមួយៗ ងាយស្រួលក្នុងការរកទីតាំងគ្លីនិចនិមួយៗអ្នកអាចរកមេីលគ្លីនិកដែលនៅជិតលោកអ្នកជាមួយព័តិមានលំអិតអំពី សេវាកម្ម  ម៉ោងផ្តល់សេវា និងផែនទីងាយស្រួលក្នុងការរកទីតាំងគ្លីនិចនិមួយៗអ្នកអាចរកមេីលគ្លីនិកដែលនៅជិតលោកអ្នកជាមួយព័តិមានលំអិតអំពី សេវាកម្ម  ម៉ោងផ្តល់សេវា និងផែនទីងាយស្រួលក្នុងការរកទីតាំងគ្លីនិចនិមួយៗ
      </Text>
    </View>
  )
}

export default FacilityDetailInfoComponent;