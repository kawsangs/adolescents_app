import React, {useState} from 'react';
import {View} from 'react-native';
import {useTranslation} from 'react-i18next';

import GenderSelectionComponent from '../shared/GenderSelectionComponent';
import BigButtonComponent from '../shared/BigButtonComponent';
import CreateAccountSelectionsComponent from './CreateAccountSelectionsComponent';
import appUserService from '../../services/app_user_service';
import asyncStorageService from '../../services/async_storage_service';
import {navigationRef} from '../../navigators/app_navigator';
import {USER_INFO_CHANGED} from '../../constants/async_storage_constant';
import audioSources from '../../constants/audio_source_constant';
import {getStyleOfDevice} from '../../utils/responsive_util';

const CreateAccountFormComponent = (props) => {
  const {t} = useTranslation();
  const [state, setState] = useState({
    gender: 'male',
    age: 0,
    province: null,
    characteristics: []
  });
  const [isValid, setIsValid] = useState(false);
  const [playingUuid, setPlayingUuid] = useState(null);

  const updateState = (fieldName, value) => {
    const newState = state;
    newState[fieldName] = value;
    setState({...newState});
    setIsValid(appUserService.isValidForm(state.age, state.province));
    asyncStorageService.setItem(USER_INFO_CHANGED, true);
  }

  const renderSelectionComponents = () => {
    return <CreateAccountSelectionsComponent
              age={state.age}
              province={state.province}
              characteristics={state.characteristics}
              updateState={(fieldName, value) => updateState(fieldName, value)}
              playingUuid={playingUuid}
              updatePlayingUuid={(uuid) => setPlayingUuid(uuid)}
           />
  }

  const save = () => {
    const user = {
      gender: state.gender,
      age: parseInt(state.age),
      province_id: state.province,
      characteristics: state.characteristics
    }

    appUserService.createUser(user);
    navigationRef.current?.reset({ index: 0, routes: [{ name: 'DrawerNavigator' }]})
  }

  const renderSaveButton = () => {
    return <BigButtonComponent label={t('saveAndLogin')} style={{marginTop: getStyleOfDevice(32, 16)}}
              uuid='123'
              audio={audioSources["0.13.mp3"]}
              playingUuid={playingUuid}
              updatePlayingUuid={(uuid) => setPlayingUuid(uuid)}
              disabled={!isValid}
              onPress={() => save()}
              accessibilityLabel='ប៊ូតុងក្រោមគេ'
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