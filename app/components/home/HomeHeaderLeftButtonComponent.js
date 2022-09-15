import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import color from '../../themes/color';
import componentUtil from '../../utils/component_util';

const HomeHeaderLeftButtonComponent = (props) => {
  return (
    <TouchableOpacity onPress={() => props.onPress()} style={styles.btnBack}>
      <Icon name="reorder-two-outline" color={color.whiteColor} size={28} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  btnBack: {
    justifyContent: 'center',
    height: componentUtil.pressableItemSize(),
    width: componentUtil.pressableItemSize(),
  }
});

export default HomeHeaderLeftButtonComponent;