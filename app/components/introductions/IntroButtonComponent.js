import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

import color from '../../themes/color';
import componentUtil from '../../utils/component_util';
import { buttonBorderRadius } from '../../constants/component_constant';

const IntroButtonComponent = (props) => {
  return <View style={styles.btn}>
            <Text style={styles.text}>{props.label}</Text>
         </View>
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: color.primaryColor,
    minWidth: componentUtil.pressableItemSize(20),
    height: componentUtil.pressableItemSize(),
    borderRadius: buttonBorderRadius,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 6
  },
  text: {
    fontSize: 18,
    color: color.whiteColor,
    fontWeight: '400'
  }
});

export default IntroButtonComponent;