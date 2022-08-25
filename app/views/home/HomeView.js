import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import color from '../../themes/color';
import audioFile from '../../assets/audios/safety_plan.mp3';

// import AudioWaveButtonComponent from '../../components/shared/audioWaveButton/AudioWaveButtonComponent';
import CardWithSoundWaveComponent from '../../components/shared/CardWithSoundWaveComponent';

const HomeView = () => {
  return (
    <View style={{flex: 1, backgroundColor: color.primaryColor, alignItems: 'center'}}>
      {/* <Text>Home screen</Text> */}
      <CardWithSoundWaveComponent/>
    </View>
  )
}

export default HomeView