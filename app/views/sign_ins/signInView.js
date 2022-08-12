import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Button, TextInput } from 'react-native-paper';

import authenticationService from '../../services/authentication_service';
import VisitorApi from '../../api/visitorApi';

const SignInView = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const authenticate = async () => {
    authenticationService.authenticate(email, password, () => {
      console.log('++ login success ++')
    }, () => {
      console.log('-- login failed --')
    })
  }

  const createVisitor = () => {
    new VisitorApi().create((res) => {
      console.log('create visitor success = ', res);
    }, (error) => {
      console.log('create visitor error = ', error);
    });
  }

  return (
    <View style={{padding: 26}}>
      <Text>Setting screen</Text>
      <TextInput label="Email" value={email} mode='outlined' keyboardType='email-address' onChangeText={text => setEmail(text)} />
      <TextInput label="Password" value={password} onChangeText={text => setPassword(text)} style={{marginTop: 20}} />

      <Button mode="contained" onPress={() => authenticate()}
        style={{width: 200, marginLeft: 100, marginTop: 100}}
      >
        Authenticate
      </Button>

      <Button mode="contained" onPress={() => createVisitor()}
        style={{width: 200, marginLeft: 100, marginTop: 100}}
      >
        Create visitor
      </Button>
    </View>
  )
}

export default SignInView;