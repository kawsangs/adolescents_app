import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import color from '../../themes/color';
import componentUtil from '../../utils/component_util';
import { outlinedButtonBorderWidth } from '../../constants/component_constant';

const PlayAudio = (props) => {
  const iconName = props.iconName || 'volume-high-outline';
  return (
    <TouchableOpacity onPress={() => props.onPress()} style={[styles.btn, props.btnStyle]}>
      <Icon name={iconName} size={props.size} color={props.color} style={props.iconStyle} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  btn: {
    width: componentUtil.pressableItemSize(),
    height: componentUtil.pressableItemSize(),
    borderWidth: outlinedButtonBorderWidth,
    borderColor: color.primaryColor,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default PlayAudio;

// How to use
// <PlayAudio btnStyle={styles} />