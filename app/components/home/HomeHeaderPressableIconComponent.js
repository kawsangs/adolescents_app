import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';

import color from '../../themes/color';
import {navigationHeaderButtonSize} from '../../constants/component_constant';

const HomeHeaderPressableIconComponent = (props) => {
  return (
    <TouchableOpacity
      onPress={() => !!props.onPress && props.onPress()}
      style={[styles.btn, props.btnStyle]}
    >
      {  React.cloneElement(props.children, {size: props.size || 22, color: props.color || color.whiteColor}) }
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  btn: {
    alignItems: 'center',
    justifyContent: 'center',
    height: navigationHeaderButtonSize,
    width: navigationHeaderButtonSize,
  }
});

export default HomeHeaderPressableIconComponent;