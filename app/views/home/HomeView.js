import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';

import audioFile from '../../assets/audios/safety_plan.mp3';

import AudioWaveButtonComponent from '../../components/shared/AudioWaveButton/AudioWaveButtonComponent';

const HomeView = () => {
  return (
    <View style={{flex: 1}}>
      {/* <Text>Home screen</Text> */}
      <AudioWaveButtonComponent/>
    </View>
  )
}

export default HomeView