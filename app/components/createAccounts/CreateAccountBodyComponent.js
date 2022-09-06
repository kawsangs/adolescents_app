import React from 'react';
import {View} from 'react-native';
import {useTranslation} from 'react-i18next';

import GenderSelectionComponent from '../shared/GenderSelectionComponent';
import TextInputWithAudioComponent from '../shared/TextInputWithAudioComponent';
import RadioButtonsComponent from '../shared/RadioButtonsComponent';
import BigButtonComponent from '../shared/BigButtonComponent';
import locations from '../../db/json/locations';
import livingConditions from '../../db/json/livingConditions';

import yourStory from '../../assets/audios/your_story.mp3';

const CreateAccountBodyComponent = () => {
  const {t} = useTranslation();
  return <View style={{paddingHorizontal: 16, marginTop: 16}}>
            <GenderSelectionComponent/>
            <TextInputWithAudioComponent label={t('yourAge')} style={{marginTop: 22}}/>

            <RadioButtonsComponent items={locations} title={t('yourLocation')} style={{marginTop: 22}}/>
            <RadioButtonsComponent items={livingConditions} title={t('yourLivingCondition')} style={{marginTop: 22}}/>
            <BigButtonComponent label={t('saveThisIndentity')} style={{marginTop: 16}}
              uuid='123'
              audio={yourStory}
              playingUuid={null}
              updatePlayingUuid={() => console.log('update uuid')}
            />
         </View>
}

export default CreateAccountBodyComponent;