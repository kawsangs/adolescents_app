import React from 'react';
import {View} from 'react-native';
import {useTranslation} from 'react-i18next';

import GenderSelectionComponent from '../shared/GenderSelectionComponent';
import TextInputWithAudioComponent from '../shared/TextInputWithAudioComponent';
import RadioButtonsComponent from '../shared/RadioButtonsComponent';
import locations from '../../db/json/locations';
import livingConditions from '../../db/json/livingConditions';

const CreateAccountBodyComponent = () => {
  const {t} = useTranslation();
  return <View style={{paddingHorizontal: 16, marginTop: 16}}>
            <GenderSelectionComponent/>
            <TextInputWithAudioComponent label={t('yourAge')} style={{marginTop: 22}}/>

            <RadioButtonsComponent items={locations} title={t('yourLocation')} style={{marginTop: 22}}/>
            <RadioButtonsComponent items={livingConditions} title={t('yourLivingCondition')} style={{marginTop: 22}}/>
         </View>
}

export default CreateAccountBodyComponent;