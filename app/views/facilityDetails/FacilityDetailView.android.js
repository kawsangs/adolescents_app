import React from 'react';
import {Animated, View, ScrollView} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import FacilityDetailNavigationHeaderComponent from '../../components/facilityDetails/FacilityDetailNavigationHeaderComponent';
import FacilityDetailGalleryComponent from '../../components/facilityDetails/FacilityDetailGalleryComponent';
import FacilityDetailInfoComponent from '../../components/facilityDetails/FacilityDetailInfoComponent';
import color from '../../themes/color'
import {scrollViewPaddingBottom} from '../../constants/component_constant';

const FacilityDetailView = (props) => {
  const scrollY = new Animated.Value(0);

  return (
    <SafeAreaView style={{flexGrow: 1}}>
      <FacilityDetailNavigationHeaderComponent scrollY={scrollY} uuid={props.route.params.uuid} isFromCategoryDetail={props.route.params.isFromCategoryDetail} />
      <ScrollView style={{flexGrow: 1, backgroundColor: color.whiteColor}}
        contentContainerStyle={{paddingBottom: scrollViewPaddingBottom}}
        onScroll={Animated.event([{nativeEvent: {contentOffset: {y: scrollY}}}], { useNativeDriver: false })}
      >
        <FacilityDetailGalleryComponent uuid={props.route.params.uuid}/>
        <FacilityDetailInfoComponent uuid={props.route.params.uuid} />
      </ScrollView>
    </SafeAreaView>
  )
}

export default FacilityDetailView;