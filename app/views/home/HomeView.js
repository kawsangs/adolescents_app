import React from 'react';
import { View, Text, ScrollView } from 'react-native';

import ScrollViewWithAudioComponent from '../../components/shared/ScrollViewWithAudioComponent';

const HomeView = () => {
  return (
    <View style={{flex: 1}}>
      <Text>Home screen</Text>
      <ScrollViewWithAudioComponent title="Item list"/>
    </View>
  )
}

export default HomeView