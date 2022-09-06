import React from 'react';
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
  return <View style={{paddingHorizontal: 16, marginTop: 16}}>
            <GenderSelectionComponent/>
            <TextInputWithAudioComponent label={t('yourAge')} style={{marginTop: 22}}/>

            <RadioButtonsComponent items={provinces} title={t('yourLocation')} style={{marginTop: 22}}/>
            <RadioButtonsComponent items={characteristics} title={t('yourCharacteristic')} style={{marginTop: 22}}/>
            <BigButtonComponent label={t('saveThisIndentity')} style={{marginTop: 16}}
              uuid='123'
              audio={yourStory}
              playingUuid={null}
              updatePlayingUuid={() => console.log('update uuid')}
            />
         </View>
}

export default CreateAccountBodyComponent;