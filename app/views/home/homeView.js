import React from 'react';
import { View, Text } from 'react-native';

import CardItemComponent from '../../components/shared/CardItemComponent';

const HomeView = () => {
  return (
    <View style={{paddingHorizontal: 16}}>
      <Text>Home screen</Text>

      <CardItemComponent/>
    </View>
  )
}

export default HomeView