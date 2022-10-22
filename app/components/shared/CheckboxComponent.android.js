import React from 'react';
import {View, StyleSheet} from 'react-native';
import {useTranslation} from 'react-i18next';

import TextComponent from './TextComponent';
import CheckboxItemComponent from './checkboxes/CheckboxItemComponent';
import color from '../../themes/color';
import {cardBorderRadius} from '../../constants/component_constant';
import {largeFontSize} from '../../utils/font_size_util';

const CheckboxComponent = (props) => {
  const {i18n} = useTranslation();
  const onPress = (value) => {
    const selectedItems = props.selectedItems.indexOf(value) != -1
                          ? props.selectedItems.filter(item => item != value)
                          : [...props.selectedItems, value]
    props.updateSelectedItems(selectedItems);
  }

  const isSelected = (value) => {
    return props.selectedItems.filter(item => item == value).length > 0;
  }

  return (
    <View style={props.style}>
      <TextComponent label={props.title} required={props.required} style={{color: color.whiteColor, fontSize: largeFontSize()}} />

      <View style={styles.checkboxContainer}>
        { props.items.map((item, index) => (
            <CheckboxItemComponent key={index} label={item[`name_${i18n.language}`]} value={item.value}
              uuid={`characteristic-${index}`}
              audio={item.audio}
              isSelected={isSelected(item.value)}
              onPress={(value) => onPress(value)}
              playingUuid={props.playingUuid}
              updatePlayingUuid={(uuid) => props.updatePlayingUuid(uuid)}
            />
          ))
        }
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  checkboxContainer: {
    backgroundColor: color.whiteColor,
    borderRadius: cardBorderRadius,
    marginTop: 10
  }
});

export default CheckboxComponent;