import React from 'react';
import { View, Text } from 'react-native';

import color from '../../themes/color';
import SettingProfileComponent from '../../components/settings/SettingProfileComponent';
import SignInView from '../sign_ins/SignInView';

const SettingView = () => {

  return (
    <View style={{flex: 1, backgroundColor: color.tertiaryColor}}>
      <Text>Setting screen</Text>

      {/* <SettingProfileComponent/> */}
      <SignInView/>
    </View>
  )
}

export default SettingView