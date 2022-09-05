import React from 'react';
import {View} from 'react-native';

import GenderSelectionComponent from '../shared/GenderSelectionComponent';
import TextInputWithAudioComponent from '../shared/TextInputWithAudioComponent';

const CreateAccountBodyComponent = () => {
  return <View style={{paddingHorizontal: 16, marginTop: 16}}>
            <GenderSelectionComponent/>
            <TextInputWithAudioComponent label="អាយុរបស់អ្នក" style={{marginTop: 22}}/>
         </View>
}

export default CreateAccountBodyComponent;