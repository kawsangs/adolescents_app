import React from 'react';
import { View, Text } from 'react-native';

import color from '../../themes/color';

const HomeView = () => {
  return (
    <View style={{color: color.primaryColor,flex: 1}}>
      <Text>Home screen</Text>
    </View>
  )
}

export default HomeView