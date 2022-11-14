import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {useTranslation} from 'react-i18next';

import GenderSelectionComponent from '../shared/GenderSelectionComponent';
import BigButtonComponent from '../shared/BigButtonComponent';
import CreateAccountSelectionsComponent from './CreateAccountSelectionsComponent';
import appUserService from '../../services/app_user_service';
import asyncStorageService from '../../services/async_storage_service';
import {navigationRef} from '../../navigators/app_navigator';
import {USER_INFO_CHANGED} from '../../constants/async_storage_constant';
import User from '../../models/User';

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

  useEffect(() => {
    if (!props.userUuid) return;

    const user = User.findByUuid(props.userUuid);
    if (user.age != -1) {
      setState({ gender: user.gender, age: user.age, province: user.province_id, characteristics: user.characteristics })
      setIsValid(true);
    }
  }, []);

  const updateState = (fieldName, value) => {
    const newState = state;
    newState[fieldName] = value;
    setState({...newState});
    setIsValid(appUserService.isValidForm(state.age, state.province));
    asyncStorageService.setItem(USER_INFO_CHANGED, true);

    if (fieldName == 'province')
      props.pickerModalRef.current?.dismiss();
  }

  const renderSelectionComponents = () => {
    return <CreateAccountSelectionsComponent
              age={state.age}
              province={state.province}
              characteristics={state.characteristics}
              updateState={(fieldName, value) => updateState(fieldName, value)}
              pickerRef={props.pickerRef}
              pickerModalRef={props.pickerModalRef}
              playingUuid={playingUuid}
              updatePlayingUuid={(uuid) => setPlayingUuid(uuid)}
           />
  }

  const save = () => {
    const user = {
      gender: state.gender,
      age: parseInt(state.age),
      province_id: state.province.value,
      characteristics: state.characteristics
    }

    !!props.userUuid ? appUserService.updateUser(props.userUuid, user) : appUserService.createUser(user);
    navigationRef.current?.reset({ index: 0, routes: [{ name: 'DrawerNavigator' }]})
  }

  const renderSaveButton = () => {
    return <BigButtonComponent label={t('saveThisIndentity')} style={{marginTop: 16}}
              uuid='123'
              audio={null}
              playingUuid={playingUuid}
              updatePlayingUuid={(uuid) => setPlayingUuid(uuid)}
              disabled={!isValid}
              onPress={() => save()}
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