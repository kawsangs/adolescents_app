import React, {useState} from 'react';
import {View} from 'react-native';
import {useTranslation} from 'react-i18next';

import GenderSelectionComponent from '../shared/GenderSelectionComponent';
import TextInputWithAudioComponent from '../shared/TextInputWithAudioComponent';
import RadioButtonsComponent from '../shared/RadioButtonsComponent';
import BigButtonComponent from '../shared/BigButtonComponent';
import provinces from '../../db/json/provinces';
import characteristics from '../../db/json/characteristics';

import yourStory from '../../assets/audios/your_story.mp3';

const CreateAccountBodyComponent = () => {
  const {t} = useTranslation();
  const [state, setState] = useState({
    gender: 'male',
    age: null,
    provinces: [],
    characteristics: []
  });
  const sectionMarginTop = 22

  const renderRadioButtons = () => {
    return <React.Fragment>
              <RadioButtonsComponent items={provinces} title={t('yourLocation')} style={{marginTop: sectionMarginTop}}
                selectedValues={state.provinces}
                mutipleSelection={false}
                updateValues={(values) => setState(prevValues => ({...prevValues, provinces: values}))}
              />
              <RadioButtonsComponent items={characteristics} title={t('yourCharacteristic')} style={{marginTop: sectionMarginTop}}
                selectedValues={state.characteristics}
                mutipleSelection={true}
                updateValues={(values) => setState(prevValues => ({...prevValues, characteristics: values}))}
              />
           </React.Fragment>
  }

  return <View style={{paddingHorizontal: 16, marginTop: 16}}>
            <GenderSelectionComponent
              selectedValue={state.gender}
              updateValue={(gender) => setState(prevValues => ({...prevValues, gender}))}
            />
            <TextInputWithAudioComponent label={t('yourAge')} style={{marginTop: sectionMarginTop}}/>
            { renderRadioButtons() }
            <BigButtonComponent label={t('saveThisIndentity')} style={{marginTop: 16}}
              uuid='123'
              audio={yourStory}
              playingUuid={null}
              updatePlayingUuid={() => console.log('update uuid')}
            />
         </View>
}

export default CreateAccountBodyComponent;