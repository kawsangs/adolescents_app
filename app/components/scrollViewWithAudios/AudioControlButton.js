import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import color from '../../themes/color';
import componentUtil from '../../utils/component_util';
import { getStyleOfDevice } from '../../utils/responsive_util';

const AudioControlButton = (props) => {
  return <TouchableOpacity onPress={() => props.onPress()} style={styles.button}>
            <Icon name={props.iconName} size={props.size} color={color.blackColor} />
         </TouchableOpacity>
}

const styles = StyleSheet.create({
  button: {
    minWidth: componentUtil.pressableItemSize(),
    minHeight: componentUtil.pressableItemSize(),
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: componentUtil.pressableItemSize() - getStyleOfDevice(15, 20),
  }
});

export default AudioControlButton;