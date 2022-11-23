import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import color from '../../themes/color';
import componentUtil from '../../utils/component_util';
import {isLowPixelDensityDevice} from '../../utils/responsive_util';
import sharedStyles from '../../assets/stylesheets/shared/sharedStyles';

const iconSize = isLowPixelDensityDevice() ? 28 : 32;

const IntroNextButtonComponent = (props) => {
  return <TouchableOpacity onPress={() => props.onPress()} style={[styles.btn, sharedStyles.boxShadow]}>
            <Icon name="chevron-right" color={color.primaryColor} size={iconSize} style={styles.icon} />
         </TouchableOpacity>
}

const styles = StyleSheet.create({
  btn: {
    alignItems: 'center',
    backgroundColor: color.whiteColor,
    borderRadius: 30,
    elevation: 3,
    height: componentUtil.mediumPressableItemSize(),
    justifyContent: 'center',
    marginRight: 10,
    marginTop: isLowPixelDensityDevice() ? 0 : -4,
    width: componentUtil.mediumPressableItemSize(),
  },
  icon: {
    height: iconSize,
    width: iconSize
  }
});

export default IntroNextButtonComponent;