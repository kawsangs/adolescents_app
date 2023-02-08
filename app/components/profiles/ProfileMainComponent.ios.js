import React from 'react';
import {View} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import DeviceInfo from 'react-native-device-info';

import ProfileInfoComponent from './ProfileInfoComponent';
import BigButtonComponent from '../shared/BigButtonComponent';
import color from '../../themes/color';
import SearchHistory from '../../models/SearchHistory';
import navigationService from '../../services/navigation_service';
import {getStyleOfDevice} from '../../utils/responsive_util';

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
          style={{marginBottom: DeviceInfo.hasNotch() ? 26 : getStyleOfDevice(26, 16), flexDirection: 'row', width: 'auto', alignSelf: 'center', paddingHorizontal: 20}}
          icon={<FeatherIcon name='rotate-ccw' color={color.primaryColor} size={17} style={{marginLeft: 14}} />}
          onPress={() => onPress()}
        />
      </View>
    </View>
  )
}

export default ProfileMainComponent;