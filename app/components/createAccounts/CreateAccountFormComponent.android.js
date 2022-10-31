import React, {useState} from 'react';
import {View} from 'react-native';
import {useTranslation} from 'react-i18next';

import GenderSelectionComponent from '../shared/GenderSelectionComponent';
import NumericInputWithAudioComponent from '../shared/NumericInputWithAudioComponent';
import BigButtonComponent from '../shared/BigButtonComponent';
import CreateAccountSelectionsComponent from './CreateAccountSelectionsComponent';
import color from '../../themes/color';
import appUserService from '../../services/app_user_service';
import asyncStorageService from '../../services/async_storage_service';
import {navigationRef} from '../../navigators/app_navigator';
import {USER_INFO_CHANGED} from '../../constants/async_storage_constant';

const CreateAccountFormComponent = (props) => {
  const {t} = useTranslation();
  const [state, setState] = useState({
    gender: 'male',
    age: 0,
    province: null,
    characteristics: []
  });
  const [isValid, setIsValid] = useState(false);

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
              province={state.province}
              characteristics={state.characteristics}
              updateState={(fieldName, value) => updateState(fieldName, value)}
              pickerRef={props.pickerRef}
              pickerModalRef={props.pickerModalRef}
           />
  }

  const save = () => {
    const user = {
      gender: state.gender,
      age: parseInt(state.age),
      province_id: state.province.value,
      characteristics: state.characteristics
    }

    appUserService.createUser(user, () => navigationRef.current?.reset({ index: 0, routes: [{ name: 'DrawerNavigator' }]}));
  }

  const renderSaveButton = () => {
    return <BigButtonComponent label={t('saveThisIndentity')} style={{marginTop: 16}}
              uuid='123'
              audio={null}
              playingUuid={null}
              updatePlayingUuid={() => console.log('update uuid')}
              disabled={!isValid}
              onPress={() => save()}
            />
  }

  return <View style={{paddingHorizontal: 16, marginTop: 16}}>
            <GenderSelectionComponent selectedValue={state.gender} updateValue={(gender) => updateState('gender', gender)} />
            <NumericInputWithAudioComponent label={t('yourAge')}
              required={true}
              requiredColor={color.blackColor}
              value={state.age.toString()}
              style={{marginTop: 22}}
              requiredVisible={state.age <= 0}
              updateValue={(age) => updateState('age', age)}
            />
            { renderSelectionComponents() }
            { renderSaveButton() }
         </View>
}

export default CreateAccountFormComponent;