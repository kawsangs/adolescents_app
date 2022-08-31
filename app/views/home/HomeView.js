import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import ScrollViewWithAudioComponent from '../../components/shared/ScrollViewWithAudioComponent';

const HomeView = () => {
  return (
    <View style={{flex: 1}}>
      <Text>Home screen</Text>
      <ScrollViewWithAudioComponent title="List items" />
    </View>
  )
}

const styles = StyleSheet.create({
  linearGradient: {
    height: 100,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
});

export default HomeView