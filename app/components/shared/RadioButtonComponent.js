import React from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import {RadioButton} from 'react-native-paper';
import {useTranslation} from 'react-i18next';

import TextComponent from './TextComponent';
import RadioButtonItemComponent from './radioButtons/RadioButtonItemComponent';
import color from '../../themes/color';
import sharedStyles from '../../assets/stylesheets/shared/sharedStyles';
import {largeFontSize} from '../../utils/font_size_util';

const RadioButtonComponent = (props) => {
  const {t, i18n} = useTranslation();
  const requiredVisible = props.required && !props.selectedValue;

  const renderTitle = () => {
    return <View style={{flexDirection: 'row'}}>
            <TextComponent label={props.title} required={props.required} style={{color: color.whiteColor, fontSize: largeFontSize()}} />
            { requiredVisible &&
              <TextComponent label={props.requiredMsg} style={{color: color.requiredColor, marginLeft: 6}} />
            }
          </View>
  }

  return (
    <View style={props.style}>
      { renderTitle() }

      <ScrollView style={[styles.radioBtnContainer, requiredVisible ? sharedStyles.requiredBorder : {}]}
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

const styles = StyleSheet.create({
  radioBtnContainer: {
    backgroundColor: color.whiteColor,
    borderRadius: 10,
    marginTop: 10,
    maxHeight: 224,
  }
});

export default RadioButtonComponent;

// Data format for the Radio button
// const data = [
//   { value: '01',
//     name_km: 'Name in Khmer',
//     name_en: 'Name in English'
//   }
// ]