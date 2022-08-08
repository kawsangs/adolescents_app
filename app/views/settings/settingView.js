import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';

import SessionApi from '../../api/sessionApi';

const SettingView = () => {
  const authenticate = async () => {
    const response = await new SessionApi().authenticate('lngo@care.org', '12a3456');
    console.log('authenticate response === ', response)
  }

  return (
    <View>
      <Text>Setting screen</Text>
      <Button mode="contained" onPress={() => authenticate()}
        style={{width: 200, marginLeft: 100, marginTop: 100}}
      >
        Authenticate
      </Button>
    </View>
  )
}

export default SettingView