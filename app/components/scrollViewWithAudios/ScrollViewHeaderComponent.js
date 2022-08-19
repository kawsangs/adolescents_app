import React from 'react';
import { Animated, StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';

import color from '../../themes/color';
import HeaderAudioControlComponent from './HeaderAudioControlComponent';
import { headerWithAudioMaxHeight, headerWithAudioMinHeight, headerWithAudioScrollDistance } from '../../constants/component_constant';

const ScrollViewHeaderComponent = (props) => {
  const headerHeight = props.scrollY.interpolate({
    inputRange: [0, headerWithAudioScrollDistance],
    outputRange: [headerWithAudioMaxHeight, headerWithAudioMinHeight],
    extrapolate: 'clamp',
  });

  return (
    <Animated.View style={[styles.header, { height: headerHeight }]}>
      <Animated.View>
        <Appbar.Header style={{backgroundColor: color.primaryColor, elevation: 0}}>
          <Appbar.BackAction />
          <Appbar.Content title={props.title} />
        </Appbar.Header>
      </Animated.View>

      <HeaderAudioControlComponent scrollY={props.scrollY} />
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: color.primaryColor,
    overflow: 'hidden',
    zIndex: 1
  },
});

export default ScrollViewHeaderComponent;