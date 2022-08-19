import React from 'react';
import { StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import color from '../../themes/color';
import componentUtil from '../../utils/component_util';

const IntroNextButtonComponent = (props) => {
  return <View style={styles.btn}>
            <Icon name="chevron-right" color={color.primaryColor} size={32} style={styles.icon} />
         </View>
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: color.whiteColor,
    width: componentUtil.pressableItemSize(8),
    height: componentUtil.pressableItemSize(8),
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -6,
    elevation: 3
  },
  icon: {
    height: 32,
    width: 32,
  }
});

export default IntroNextButtonComponent;