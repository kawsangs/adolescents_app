import React from 'react';
import {View, ScrollView} from 'react-native';
import { RadioButton, Text } from 'react-native-paper';

import TextComponent from './TextComponent';
import RadioButtonItemComponent from './radioButtons/RadioButtonItemComponent';

const RadioButtonsComponent = (props) => {
  return (
    <View style={props.style}>
      <TextComponent label={props.title} style={{color: 'white'}} />

      <ScrollView style={{backgroundColor: 'white', marginTop: 10, borderRadius: 10, maxHeight: 224,}}
        nestedScrollEnabled={true}
        showsVerticalScrollIndicator={false}
      >
        <RadioButton.Group onValueChange={newValue => setValue(newValue)} value='first'>
          { props.items.map((item, index) => (
              <RadioButtonItemComponent key={index} label={item.label} />
            ))
          }
        </RadioButton.Group>
      </ScrollView>
    </View>
  )
}

export default RadioButtonsComponent;