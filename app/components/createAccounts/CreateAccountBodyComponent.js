import React, {useState} from 'react';
import {View, ToastAndroid} from 'react-native';
import {useTranslation} from 'react-i18next';

import GenderSelectionComponent from '../shared/GenderSelectionComponent';
import NumericInputWithAudioComponent from '../shared/NumericInputWithAudioComponent';
import RadioButtonComponent from '../shared/RadioButtonComponent';
import BigButtonComponent from '../shared/BigButtonComponent';
import provinces from '../../db/json/provinces';
import characteristics from '../../db/json/characteristics';
import createAccountService from '../../services/create_account_service';
import errorUtil from '../../utils/error_util';
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
  const sectionMarginTop = 22

  const renderRadioButtons = () => {
    return <React.Fragment>
              <RadioButtonComponent items={provinces} title={t('yourLocation')} style={{marginTop: sectionMarginTop}}
                selectedValue={state.province}
                required={true}
                mutipleSelection={false}
                updateValue={(province) => setState(prevValues => ({...prevValues, province}))}
              />
              {/* <RadioButtonComponent items={characteristics} title={t('yourCharacteristic')} style={{marginTop: sectionMarginTop}}
                selectedValues={state.characteristics}
                mutipleSelection={true}
                updateValues={(values) => setState(prevValues => ({...prevValues, characteristics: values}))}
              /> */}
           </React.Fragment>
  }

  const save = () => {
    const user = {
      gender: state.gender,
      age: parseInt(state.age),
      province_id: state.province,
      characteristics: state.characteristics
    }

    createAccountService.create(user, (res) => {
      navigationRef.current?.navigate('BottomTabs');
    }, (error) => {
      showErrorMessage(errorUtil.getErrorMessage(error.status, t).description);
    });
  }

  const showErrorMessage = (message) => {
    ToastAndroid.showWithGravityAndOffset(
      message,
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM,
      0,
      200
    );
  }

  return <View style={{paddingHorizontal: 16, marginTop: 16}}>
            <GenderSelectionComponent
              selectedValue={state.gender}
              updateValue={(gender) => setState(prevValues => ({...prevValues, gender}))}
            />
            <NumericInputWithAudioComponent label={t('yourAge')} value={state.age.toString()}
              style={{marginTop: sectionMarginTop}}
              updateValue={(age) => setState(prevValues => ({...prevValues, age}))}
            />
            { renderRadioButtons() }
            <BigButtonComponent label={t('saveThisIndentity')} style={{marginTop: 16}}
              uuid='123'
              audio={yourStory}
              playingUuid={null}
              updatePlayingUuid={() => console.log('update uuid')}
              onPress={() => save()}
            />
         </View>
}

export default CreateAccountBodyComponent;