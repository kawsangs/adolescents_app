import React, {useState} from 'react';
import {View} from 'react-native';
import {useTranslation} from 'react-i18next';

import GenderSelectionComponent from '../shared/GenderSelectionComponent';
import NumericInputWithAudioComponent from '../shared/NumericInputWithAudioComponent';
import BigButtonComponent from '../shared/BigButtonComponent';
import CreateAccountSelectionsComponent from './CreateAccountSelectionsComponent';
import appUserService from '../../services/app_user_service';
import errorUtil from '../../utils/error_util';
import toastMessageHelper from '../../helpers/toast_message_helper';
import {navigationRef} from '../../navigators/app_navigator';
import yourStory from '../../assets/audios/your_story.mp3';

const CreateAccountBodyComponent = () => {
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
  }

  const renderSelectionComponents = () => {
    return <CreateAccountSelectionsComponent
              province={state.province}
              characteristics={state.characteristics}
              updateState={(fieldName, value) => updateState(fieldName, value)}
           />
  }

  const save = () => {
    const user = {
      gender: state.gender,
      age: parseInt(state.age),
      province_id: state.province,
      characteristics: state.characteristics
    }

    appUserService.createUser(user, (res) => {
      navigationRef.current?.navigate('BottomTabs');
    }, (error) => {
      toastMessageHelper(errorUtil.getErrorMessage(error.status, t).description);
    });
  }

  return <View style={{paddingHorizontal: 16, marginTop: 16}}>
            <GenderSelectionComponent selectedValue={state.gender} updateValue={(gender) => updateState('gender', gender)} />
            <NumericInputWithAudioComponent label={t('yourAge')} requiredMsg={t('pleaseInputYourAge')}
              required={true}
              value={state.age.toString()}
              style={{marginTop: 22}}
              requiredVisible={state.age <= 0}
              updateValue={(age) => updateState('age', age)}
            />
            { renderSelectionComponents() }
            <BigButtonComponent label={t('saveThisIndentity')} style={{marginTop: 16}}
              uuid='123'
              audio={yourStory}
              playingUuid={null}
              updatePlayingUuid={() => console.log('update uuid')}
              disabled={!isValid}
              onPress={() => save()}
            />
         </View>
}

export default CreateAccountBodyComponent;