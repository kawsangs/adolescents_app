import React from 'react';
import { View, Text } from 'react-native';

import HomeNavigationHeader from '../../components/home/HomeNavigationHeader';
import color from '../../themes/color';

const HomeView = () => {
  return (
    <View style={{flex: 1, backgroundColor: color.primaryColor}}>
      {/* <Text>Home screen</Text> */}
      <HomeNavigationHeader/>
    </View>
  )
}

export default HomeView