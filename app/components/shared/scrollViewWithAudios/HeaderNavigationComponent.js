import React from 'react';
import { Animated, StyleSheet, TouchableOpacity } from 'react-native';
import { Appbar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Feather';

import color from '../../../themes/color';
import { FontFamily } from '../../../themes/font';
import {bigFontSize} from '../../../utils/font_size_util';
import componentUtil from '../../../utils/component_util';
import {headerWithAudioScrollDistance} from '../../../constants/component_constant';

const HeaderNavigationComponent = (props) => {
  const titleOpacity = props.scrollY.interpolate({
    inputRange: [0, headerWithAudioScrollDistance],
    outputRange: [0, 1],
    extrapolate: 'extend'
  });

  return (
    <Appbar.Header style={styles.container}>
      <TouchableOpacity style={styles.btnBack}>
        <Icon name="chevron-left" color={color.whiteColor} size={30} />
      </TouchableOpacity>

      <Animated.View style={{flex: 1, paddingLeft: 8, opacity: titleOpacity}}>
        <Appbar.Content title={props.title} style={{justifyContent: 'center'}}
          titleStyle={styles.title}
        />
      </Animated.View>
    </Appbar.Header>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
    elevation: 0
  },
  btnBack: {
    alignItems: 'center',
    justifyContent: 'center',
    height: componentUtil.pressableItemSize(),
    width: componentUtil.pressableItemSize(),
  },
  title: {
    fontFamily: FontFamily.bold,
    fontSize: bigFontSize()
  }
});

export default HeaderNavigationComponent;