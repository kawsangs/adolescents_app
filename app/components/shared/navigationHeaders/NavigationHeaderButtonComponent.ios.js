import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';

import componentUtil from '../../../utils/component_util';

const NavigationHeaderButtonComponent = (props) => {
  return (
    <TouchableOpacity onPress={() => !!props.onPress && props.onPress()} style={[styles.btnBack, props.buttonStyle]}>
      {props.icon}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  btnBack: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: componentUtil.pressableItemSize(),
  }
});

export default NavigationHeaderButtonComponent;