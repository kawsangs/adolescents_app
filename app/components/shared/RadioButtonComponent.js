import React from 'react';
import {View, ScrollView} from 'react-native';
import {RadioButton} from 'react-native-paper';
import {useTranslation} from 'react-i18next';

import TextComponent from './TextComponent';
import RadioButtonItemComponent from './radioButtons/RadioButtonItemComponent';

const RadioButtonComponent = (props) => {
  const {i18n} = useTranslation();

  return (
    <View style={props.style}>
      <TextComponent label={props.title} required={props.required} style={{color: 'white'}} />

      <ScrollView style={{backgroundColor: 'white', marginTop: 10, borderRadius: 10, maxHeight: 224,}}
        nestedScrollEnabled={true}
        showsVerticalScrollIndicator={false}
      >
        <RadioButton.Group onValueChange={newValue => props.updateValue(newValue)}>
          { props.items.map((item, index) => (
              <RadioButtonItemComponent key={index} label={item[`name_${i18n.language}`]} value={item.value}
                selectedValue={props.selectedValue}
                updateValue={props.updateValue}
              />
            ))
          }
        </RadioButton.Group>
      </ScrollView>
    </View>
  )
}

export default RadioButtonComponent;

// Data format for the Radio button
// const data = [
//   { value: '01',
//     name_km: 'Name in Khmer',
//     name_en: 'Name in English'
//   }
// ]