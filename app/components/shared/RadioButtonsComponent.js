import React from 'react';
import {View, ScrollView} from 'react-native';
import {RadioButton} from 'react-native-paper';
import {useTranslation} from 'react-i18next';

import TextComponent from './TextComponent';
import RadioButtonItemComponent from './radioButtons/RadioButtonItemComponent';

const RadioButtonsComponent = (props) => {
  const {i18n} = useTranslation();
  const updateValues = (value) => {
    if (!props.mutipleSelection)
      return props.updateValues([value]);

    const selectedValues = props.selectedValues.indexOf(value) != -1
                          ? props.selectedValues.filter(item => item != value)
                          : [...props.selectedValues, value]
    props.updateValues(selectedValues);
  }

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
                selectedValues={props.selectedValues}
                updateValues={updateValues}
              />
            ))
          }
        </RadioButton.Group>
      </ScrollView>
    </View>
  )
}

export default RadioButtonsComponent;

// Data format for the Radio button
// const data = [
//   { value: '01',
//     name_km: 'Name in Khmer',
//     name_en: 'Name in English'
//   }
// ]