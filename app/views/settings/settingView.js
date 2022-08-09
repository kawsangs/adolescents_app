import React, { useState } from 'react';
import { View, Text } from 'react-native';

import color from '../../themes/color';
import SettingProfileComponent from '../../components/settings/settingProfileComponent';

const SettingView = () => {

  return (
    <View style={{flex: 1, backgroundColor: color.tertiaryColor}}>
      <Text>Setting screen</Text>

      <SettingProfileComponent/>
    </View>
  )
}

export default SettingView