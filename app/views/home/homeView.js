import React from 'react';
import { View, Text } from 'react-native';

import ScrollViewWithAudioComponent from '../../components/scrollViewWithAudios/ScrollViewWithAudioComponent';

const HomeView = () => {
  return (
    <View style={{flex: 1}}>
      {/* <Text>Home screen</Text> */}
      <ScrollViewWithAudioComponent
        title="Header Title"
      />
    </View>
  )
}

export default HomeView