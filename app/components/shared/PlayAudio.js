import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import color from '../../themes/color';

import componentUtil from '../../utils/component_util';

const PlayAudio = (props) => {
  return (
    <TouchableOpacity style={styles.btn}>
      <Icon name='volume-high-outline' size={props.size} color={props.color} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  btn: {
    width: componentUtil.pressableItemSize(),
    height: componentUtil.pressableItemSize(),
    borderWidth: 2,
    borderColor: color.primaryColor,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default PlayAudio;