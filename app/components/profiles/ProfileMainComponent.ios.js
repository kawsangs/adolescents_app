import React from 'react';
import {View} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';

import ProfileInfoComponent from './ProfileInfoComponent';
import BigButtonComponent from '../shared/BigButtonComponent';
import color from '../../themes/color';
import SearchHistory from '../../models/SearchHistory';
import navigationService from '../../services/navigation_service';

const ProfileMainComponent = () => {
  onPress = () => {
    SearchHistory.deleteAll();
    navigationService.logOut();
  }

  return (
    <View style={{flexGrow: 1, flexDirection: 'column'}}>
      <ProfileInfoComponent/>
      <View style={{flex: 1}} />
      <View>
        <BigButtonComponent
          label='ចាប់ផ្ដើមសាជាថ្មី'
          hideAudio={true}
          style={{marginBottom: 16, flexDirection: 'row', width: '50%', alignSelf: 'center'}}
          icon={<FeatherIcon name='rotate-ccw' color={color.primaryColor} size={20} style={{marginLeft: 14}} />}
          onPress={() => onPress()}
        />
      </View>
    </View>
  )
}

export default ProfileMainComponent;