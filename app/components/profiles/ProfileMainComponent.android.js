import React from 'react';
import {View} from 'react-native';

import ProfileInfoComponent from './ProfileInfoComponent';
import BigButtonComponent from '../shared/BigButtonComponent';
import SearchHistory from '../../models/SearchHistory';
import navigationService from '../../services/navigation_service';
import audioSources from '../../constants/audio_source_constant';

const ProfileMainComponent = (props) => {
  onPress = () => {
    SearchHistory.deleteAll();
    navigationService.logOut();
  }

  return (
    <View style={{flexGrow: 1, flexDirection: 'column'}}>
      <ProfileInfoComponent playingUuid={props.playingUuid} updatePlayingUuid={(uuid) => props.updatePlayingUuid(uuid)}/>
      <View style={{flex: 1}} />
      <View>
        <BigButtonComponent
          label='ចាប់ផ្ដើមសាជាថ្មី'
          uuid='reset-button'
          style={{marginBottom: 16}}
          audio={audioSources['0.43.mp3']}
          playingUuid={props.playingUuid}
          updatePlayingUuid={(uuid) => props.updatePlayingUuid(uuid)}
          onPress={() => onPress()}
        />
      </View>
    </View>
  )
}

export default ProfileMainComponent;