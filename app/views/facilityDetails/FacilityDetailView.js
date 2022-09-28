import React from 'react';
import {Animated, View, Text, ScrollView} from 'react-native';

import FacilityDetailNavigationHeaderComponent from '../../components/facilityDetails/FacilityDetailNavigationHeaderComponent';
import FacilityDetailSliderComponent from '../../components/facilityDetails/FacilityDetailSliderComponent';
import color from '../../themes/color'
import {scrollViewPaddingBottom} from '../../constants/component_constant';

const FacilityDetailView = (props) => {
  const scrollY = new Animated.Value(0);

  return (
    <View style={{flex: 1, borderWidth: 1}}>
      <FacilityDetailNavigationHeaderComponent scrollY={scrollY} />
      <ScrollView style={{flexGrow: 1, backgroundColor: color.whiteColor}}
        contentContainerStyle={{paddingBottom: scrollViewPaddingBottom}}
        onScroll={Animated.event([{nativeEvent: {contentOffset: {y: scrollY}}}], { useNativeDriver: false })}
      >
        <FacilityDetailSliderComponent/>
      </ScrollView>
    </View>
  )
}

export default FacilityDetailView;