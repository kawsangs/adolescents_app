import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

import color from '../../themes/color';
import componentUtil from '../../utils/component_util';

const IntroButtonComponent = (props) => {
  return <View style={styles.btn}>
            <Text style={styles.text}>></Text>
            {/* <Text style={styles.text}>{props.label}</Text> */}
         </View>
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: color.primaryColor,
    width: componentUtil.pressableItemSize(8),
    height: componentUtil.pressableItemSize(8),
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -24,
    elevation: 2
  },
  text: {
    fontSize: 18,
    color: color.whiteColor,
    fontWeight: '400'
  }
});

export default IntroButtonComponent;