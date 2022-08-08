import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import EncryptedStorage from 'react-native-encrypted-storage';

import { AUTH_ACCOUNT, AUTH_TOKEN } from '../../constants/authentication_constant';
import authenticationService from '../../services/authentication_service';

const SettingView = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const authenticate = async () => {
    authenticationService.authenticate(email, password, () => {
      console.log('++ login success ++')
    }, () => {
      console.log('-- login failed --')
    })
  }

  const readAuthentication = async () => {
    const account = await EncryptedStorage.getItem(AUTH_ACCOUNT);
    const token = await EncryptedStorage.getItem(AUTH_TOKEN);

    console.log('saved account = ', account);
    console.log('saved token = ', token);
  }

  return (
    <View style={{padding: 26}}>
      <Text>Setting screen</Text>
      <TextInput label="Email" value={email} keyboardType='email-address' onChangeText={text => setEmail(text)} />
      <TextInput label="Password" value={password} onChangeText={text => setPassword(text)} style={{marginTop: 20}} />

      <Button mode="contained" onPress={() => authenticate()}
        style={{width: 200, marginLeft: 100, marginTop: 100}}
      >
        Authenticate
      </Button>

      <Button mode="contained" onPress={() => readAuthentication()}
        style={{width: 200, marginLeft: 100, marginTop: 100, backgroundColor: 'green'}}
      >
        Read token
      </Button>
    </View>
  )
}

export default SettingView