import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import BaseApi from '../../api/baseApi';
import UserBasedApi from '../../api/userBasedApi';
import ScorecardApi from '../../api/scorecardApi';
import authenticationService from '../../services/authentication_service';

import urlUtil from '../../utils/url_util';

const HomeView = () => {
  const testConnect = () => {
    new ScorecardApi().load('601644', (res) => {
      console.log('== api success res = ', res);
    }, (error) => {
      console.log('== api error = ', error);
    });
  }

  const signIn = () => {
    authenticationService.authenticate('lngo@care.org', '123456', (res) => {
      console.log('authentication success ====');
    }, (error) => {
      console.log('authentication error ====')
    })
  }

  return (
    <View>
      <Text>Home screen</Text>

      <TouchableOpacity onPress={() => testConnect()} style={{marginTop: 10, marginLeft: 20, backgroundColor: 'green', width: 100, height: 100}}>
        <Text style={{ color: 'white' }}>Testing</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => signIn()} style={{marginTop: 10, marginLeft: 20, backgroundColor: 'green', width: 100, height: 100}}>
        <Text style={{color: 'white'}}>Sign-in</Text>
      </TouchableOpacity>
    </View>
  )
}

export default HomeView