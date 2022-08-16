import React from 'react';
import { View, Text } from 'react-native';

import AnimatedScrollViewComponent from '../../components/animatedScrollViews/animatedScrollViewComponent';

const HomeView = () => {
  return (
    <View style={{flex: 1}}>
      {/* <Text>Home screen</Text> */}
      <AnimatedScrollViewComponent/>
    </View>
  )
}

export default HomeView