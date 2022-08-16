import React from 'react';
import { View, Text } from 'react-native';

import color from '../../themes/color';

const SettingView = () => {

  return (
    <View style={{flex: 1, backgroundColor: color.tertiaryColor}}>
      <Text>Setting screen</Text>
    </View>
  )
}

export default SettingView