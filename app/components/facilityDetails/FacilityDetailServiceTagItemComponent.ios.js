import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text} from 'react-native-paper';

import color from '../../themes/color';
import {descriptionFontSize} from '../../constants/component_constant';

const FacilityDetailServiceTagItemComponent = (props) => {
  return (
    <View {...props} style={[styles.tag, props.tagStyle]}>
      <Text style={{color: color.blackColor, fontSize: descriptionFontSize}}>{props.label}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  tag: {
    backgroundColor: "#e3e3e3",
    borderRadius: 20,
    marginRight: 8,
    marginTop: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
})

export default FacilityDetailServiceTagItemComponent;