import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import IonIcon from 'react-native-vector-icons/Ionicons';

import GradientViewComponent from '../shared/GradientViewComponent';
import BoldLabelComponent from '../shared/BoldLabelComponent';
import color from '../../themes/color';
import componentUtil from '../../utils/component_util';
import {bigFontSize} from '../../utils/font_size_util';

const LoginSelectionButtonComponent = (props) => {
  return (
    <TouchableOpacity
      onPress={() => !!props.onPress && props.onPress()}
      style={[styles.container, props.btnStyle]}
    >
      <GradientViewComponent
        style={{width: 56, height: '100%', borderTopLeftRadius: 25, borderBottomLeftRadius: 25}}
      >
        <TouchableOpacity style={{width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center', borderTopLeftRadius: 25, borderBottomLeftRadius: 25}}>
          <FeatherIcon name={props.iconName} color={color.whiteColor} size={24} />
        </TouchableOpacity>
      </GradientViewComponent>

      <BoldLabelComponent label={props.label} style={{flex: 1, paddingLeft: 24, color: color.primaryColor, fontSize: bigFontSize()}} />

      <TouchableOpacity style={{width: componentUtil.pressableItemSize(), alignItems: 'center'}}>
        <IonIcon name="volume-high-outline" color={color.primaryColor} size={24} />
      </TouchableOpacity>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center', elevation: 4,
    backgroundColor: color.whiteColor,
    borderRadius: 25,
    flexDirection: 'row',
    height: componentUtil.pressableItemSize(),
    width: '100%'
  }
});

export default LoginSelectionButtonComponent;