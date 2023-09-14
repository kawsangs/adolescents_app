import React from 'react';
import {View, StyleSheet} from 'react-native';
import {useTranslation} from 'react-i18next';

import TextComponent from './TextComponent';
import CheckboxItemComponent from './checkboxes/CheckboxItemComponent';
import color from '../../themes/color';
import {cardBorderRadius} from '../../constants/component_constant';
import {xLargeFontSize} from '../../utils/font_size_util';

const CheckboxComponent = (props) => {
  const {t} = useTranslation();
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
      <TextComponent label={props.title} required={props.required} style={{color: color.whiteColor, fontSize: xLargeFontSize()}} />

      <View style={styles.checkboxContainer}>
        { props.items.map((item, index) => (
            <CheckboxItemComponent key={index} label={t(item.name)} value={item.value}
              uuid={`characteristic-${index}`}
              audio={item.audio}
              isSelected={isSelected(item.value)}
              onPress={(value) => onPress(value)}
              playingUuid={props.playingUuid}
              updatePlayingUuid={(uuid) => props.updatePlayingUuid(uuid)}
              accessibilityLabel={`${props.accessibilityLabel}${index + 1}`}
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