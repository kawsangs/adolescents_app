import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import color from '../../themes/color';
import componentUtil from '../../utils/component_util';

const IntroNextButtonComponent = (props) => {
  return <TouchableOpacity onPress={() => props.onPress()} style={styles.btn}>
            <Icon name="chevron-right" color={color.primaryColor} size={32} style={styles.icon} />
         </TouchableOpacity>
}

const styles = StyleSheet.create({
  btn: {
    alignItems: 'center',
    backgroundColor: color.whiteColor,
    borderRadius: 30,
    elevation: 3,
    height: componentUtil.pressableItemSize(8),
    justifyContent: 'center',
    marginRight: 10,
    marginTop: -6,
    width: componentUtil.pressableItemSize(8),
  },
  icon: {
    height: 32,
    width: 32,
  }
});

export default IntroNextButtonComponent;