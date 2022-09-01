import React from 'react';
import { View, ScrollView } from 'react-native';

import HomeNavigationHeader from '../../components/home/HomeNavigationHeader';
import HomeHorizontalCardListComponent from '../../components/home/HomeHorizontalCardListComponent';
import HomeTiltedCardListComponent from '../../components/home/HomeTiltedCardListComponent';
import color from '../../themes/color';
import {screenHorizontalPadding, scrollViewPaddingBottom} from '../../constants/component_constant';

const HomeView = () => {
  return (
    <View style={{flex: 1, backgroundColor: color.primaryColor}}>
      <HomeNavigationHeader/>

      <ScrollView contentContainerStyle={{flexGrow: 1, paddingHorizontal: screenHorizontalPadding, paddingBottom: scrollViewPaddingBottom}}>
        <HomeHorizontalCardListComponent/>

        <HomeTiltedCardListComponent/>
      </ScrollView>
    </View>
  )
}

export default HomeView