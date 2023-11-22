import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import {Text, RadioButton} from 'react-native-paper';

import color from '../../../themes/color';

const RadioButtonComponent = (props) => {
  return (
    <TouchableOpacity onPress={() => props.onPress(props.value)} style={{flexDirection: 'row', alignItems: 'center', borderBottomWidth: 1, borderColor: color.lightGrayColor, paddingVertical: 6}}>
      <View style={{minHeight: 48, justifyContent: 'center', paddingRight: 12}}>
        <RadioButton value={props.value} style={{paddingLeft: 0}} uncheckedColor={color.primaryColor} color={color.secondaryColor}
          status={ props.isSelected ? 'checked' : 'unchecked' }
          onPress={() => props.onPress(props.value)}
        />
      </View>
      <Text style={{flexShrink: 1}}>{props.label}</Text>
    </TouchableOpacity>
  )
}

export default RadioButtonComponent;