import React, {useState} from 'react';
import {View} from 'react-native';
import {useDispatch} from 'react-redux';

import GenderSelectionComponent from '../shared/GenderSelectionComponent';
import CreateAccountSelectionsComponent from './CreateAccountSelectionsComponent';
import CreateAccountSaveButtonComponent from './CreateAccountSaveButtonComponent';
import appUserService from '../../services/app_user_service';
import asyncStorageService from '../../services/async_storage_service';
import {navigationRef} from '../../navigators/app_navigator';
import {USER_INFO_CHANGED} from '../../constants/async_storage_constant';
import { setLoginUserOccupation } from '../../features/users/loginUserOccupationSlice';
import {setPlayingAudio} from '../../features/audios/currentPlayingAudioSlice';

const CreateAccountFormComponent = (props) => {
  const [state, setState] = useState({
    gender: 'male',
    age: 0,
    province: null,
    characteristics: [],
    occupation: null,
    educationLevel: null,
  });
  const [isValid, setIsValid] = useState(false);
  const [playingUuid, setPlayingUuid] = useState(null);
  const dispatch = useDispatch();

  const updateState = (fieldName, value) => {
    const newState = state;
    newState[fieldName] = value;
    setState({...newState});
    setIsValid(appUserService.isValidForm(state.age, state.province, state.occupation, state.educationLevel));
    asyncStorageService.setItem(USER_INFO_CHANGED, true);
  }

  const renderSelectionComponents = () => {
    return <CreateAccountSelectionsComponent
              age={state.age}
              province={state.province}
              occupation={state.occupation}
              educationLevel={state.educationLevel}
              characteristics={state.characteristics}
              updateState={(fieldName, value) => updateState(fieldName, value)}
              playingUuid={playingUuid}
              updatePlayingUuid={(uuid) => {
                dispatch(setPlayingAudio(uuid))
                setPlayingUuid(uuid);
              }}
           />
  }

  const saveUser = () => {
    const user = {
      gender: state.gender,
      age: parseInt(state.age),
      province_id: state.province,
      characteristics: state.characteristics,
      occupation: state.occupation,
      education_level: state.educationLevel
    }
    appUserService.createUser(user);
    dispatch(setLoginUserOccupation(state.occupation));
    navigationRef.current?.reset({ index: 0, routes: [{ name: 'DrawerNavigator' }]})
  }

  const renderSaveButton = () => {
    return <CreateAccountSaveButtonComponent
              playingUuid={playingUuid}
              updatePlayingUuid={(uuid) => setPlayingUuid(uuid)}
              isValid={isValid}
              saveUser={() => saveUser()}
           />
  }

  return <View style={{paddingHorizontal: 16, marginTop: 16}}>
            <GenderSelectionComponent selectedValue={state.gender} playingUuid={playingUuid}
              updateValue={(gender) => updateState('gender', gender)}
              updatePlayingUuid={(uuid) => setPlayingUuid(uuid)}
            />
            { renderSelectionComponents() }
            { renderSaveButton() }
         </View>
}

export default CreateAccountFormComponent;