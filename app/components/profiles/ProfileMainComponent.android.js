import React, {useCallback} from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-paper';
import {useDispatch} from 'react-redux';
import { useFocusEffect } from '@react-navigation/native';
import {useTranslation} from 'react-i18next';

import ProfileInfoComponent from './ProfileInfoComponent';
import BigButtonComponent from '../shared/BigButtonComponent';
import SearchHistory from '../../models/SearchHistory';
import User from '../../models/User';
import navigationService from '../../services/navigation_service';
import audioSources from '../../constants/audio_source_constant';
import {resetSelectedVidAuthor} from '../../features/videos/filterVideoAuthorSlice';
import {resetSelectedLocation} from '../../features/facilities/filterFacilityLocationSlice';
import { setLoginUserOccupation } from '../../features/users/loginUserOccupationSlice';

const {useImperativeHandle} = React;

const ProfileMainComponent = React.forwardRef((props, ref) => {
  const {t} = useTranslation();
  const dispatch = useDispatch();
  const [loggedInUser, setLoggedInUser] = React.useState(User.currentLoggedIn());
  const currentOccupation = loggedInUser.occupation;
  const [occupation, setOccupation] = React.useState(loggedInUser.occupation);
  const [educationLevel, setEducationLevel] = React.useState(loggedInUser.education_level);

  useFocusEffect(
    useCallback(() => {
      setOccupation(loggedInUser.occupation);
      setEducationLevel(loggedInUser.education_level); 
      return () => {}
    }, [])
  )

  useImperativeHandle(ref, () => ({
    currentOccupation,
    occupation
  }))

  onPress = () => {
    SearchHistory.deleteAll();
    dispatch(resetSelectedVidAuthor())
    dispatch(resetSelectedLocation())
    navigationService.logOut();
  }

  updateProfile = () => {
    User.update(loggedInUser.uuid, { occupation: occupation, education_level: educationLevel, synced: false });
    setLoggedInUser(User.findByUuid(loggedInUser.uuid))
    dispatch(setLoginUserOccupation(occupation))
  }

  renderSaveBtn = () => {
    return <React.Fragment>
              <Text style={{color: 'white', textAlign: 'center', marginBottom: 10, lineHeight: 24}}>
                { (occupation != 'n_a' && educationLevel != 'n_a') ? t('pressSaveToUpdateOccupationAndEducationalLevel') : ''}
              </Text>
              <BigButtonComponent
                label={t('save')}
                uuid='save-button'
                style={{marginBottom: 16}}
                audio={null}
                playingUuid={props.playingUuid}
                updatePlayingUuid={(uuid) => props.updatePlayingUuid(uuid)}
                onPress={() => updateProfile()}
                disabled={occupation == 'n_a' || educationLevel == 'n_a'}
              />
           </React.Fragment>
  }

  const renderButton = () => {
    if (!User.isLoginAsAnonymous() && currentOccupation == 'n_a')
      return renderSaveBtn()

    return <BigButtonComponent
              label={t('startAgain')}
              uuid='reset-button'
              style={{marginBottom: 16, marginTop: 12}}
              audio={audioSources['0.43.mp3']}
              playingUuid={props.playingUuid}
              updatePlayingUuid={(uuid) => props.updatePlayingUuid(uuid)}
              onPress={() => onPress()}
           />
  }

  return (
    <View style={{flexGrow: 1, flexDirection: 'column'}}>
      <ProfileInfoComponent playingUuid={props.playingUuid} updatePlayingUuid={(uuid) => props.updatePlayingUuid(uuid)} occupation={occupation} educationLevel={educationLevel}
        updateOccupation={(item) => setOccupation(item)}
        updateEducationLevel={(item) => setEducationLevel(item)}
      />
      {renderButton()}
    </View>
  )
})

export default ProfileMainComponent;