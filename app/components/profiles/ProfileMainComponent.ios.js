import React, {useCallback} from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-paper';
import DeviceInfo from 'react-native-device-info';
import {useDispatch} from 'react-redux';
import { useFocusEffect } from '@react-navigation/native';

import ProfileInfoComponent from './ProfileInfoComponent';
import BigButtonComponent from '../shared/BigButtonComponent';
import SearchHistory from '../../models/SearchHistory';
import User from '../../models/User';
import navigationService from '../../services/navigation_service';
import {getStyleOfDevice} from '../../utils/responsive_util';
import audioSources from '../../constants/audio_source_constant';
import {resetSelectedVidAuthor} from '../../features/videos/filterVideoAuthorSlice';
import {resetSelectedLocation} from '../../features/facilities/filterFacilityLocationSlice';
import { setLoginUserOccupation } from '../../features/users/loginUserOccupationSlice';

const ProfileMainComponent = (props) => {
  const dispatch = useDispatch();
  const [loggedInUser, setLoggedInUser] = React.useState(User.currentLoggedIn());
  const currentOccupation = loggedInUser.occupation;
  const [selectedOccupation, setSelectedOccupation] = React.useState(loggedInUser.occupation);
  useFocusEffect(
    useCallback(() => {
      setSelectedOccupation(loggedInUser.occupation); 
      return () => {}
    }, [])
  )

  onPress = () => {
    SearchHistory.deleteAll();
    dispatch(resetSelectedVidAuthor())
    dispatch(resetSelectedLocation())
    navigationService.logOut();
  }

  updateProfile = () => {
    User.update(loggedInUser.uuid, { occupation: selectedOccupation, synced: false });
    setLoggedInUser(User.findByUuid(loggedInUser.uuid))
    dispatch(setLoginUserOccupation(selectedOccupation))
  }

  renderSaveBtn = () => {
    return <React.Fragment>
              <Text style={{color: 'white', textAlign: 'center', marginBottom: 8, lineHeight: 24}}>ដើម្បីផ្លាស់ប្ដូរមុខរបរ សូមចុច "រក្សាទុក"</Text>
              <BigButtonComponent
                label='រក្សាទុក'
                uuid='save-button'
                style={{marginBottom: DeviceInfo.hasNotch() ? 26 : getStyleOfDevice(26, 16)}}
                audio={null}
                playingUuid={props.playingUuid}
                updatePlayingUuid={(uuid) => props.updatePlayingUuid(uuid)}
                onPress={() => updateProfile()}
                disabled={!selectedOccupation}
              />
           </React.Fragment>
  }

  return (
    <View style={{flexGrow: 1, flexDirection: 'column'}}>
      <ProfileInfoComponent playingUuid={props.playingUuid} updatePlayingUuid={(uuid) => props.updatePlayingUuid(uuid)} selectedOccupation={selectedOccupation}
        updateSelectedOccupation={(occupation) => setSelectedOccupation(occupation)}
      />
      <View style={{flex: 1}} />
      <View>
        { currentOccupation != selectedOccupation ?
          renderSaveBtn()
          :
          <BigButtonComponent
            label='ចាប់ផ្ដើមសាជាថ្មី'
            uuid='reset-button'
            style={{marginBottom: DeviceInfo.hasNotch() ? 26 : getStyleOfDevice(26, 16)}}
            audio={audioSources['0.43.mp3']}
            playingUuid={props.playingUuid}
            updatePlayingUuid={(uuid) => props.updatePlayingUuid(uuid)}
            onPress={() => onPress()}
          />
        }
      </View>
    </View>
  )
}

export default ProfileMainComponent;