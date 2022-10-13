import React from 'react';
import { Animated, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import color from '../../../themes/color';
import HeaderAudioControlComponent from './HeaderAudioControlComponent';
import ScrollViewHeaderNavigationComponent from './ScrollViewHeaderNavigationComponent';
import { headerWithAudioMaxHeight, headerWithAudioMinHeight, headerWithAudioScrollDistance } from '../../../constants/component_constant';
import {getStyleOfDevice} from '../../../utils/responsive_util';

const ScrollViewHeaderComponent = (props) => {
  const headerHeight = props.scrollY.interpolate({
    inputRange: [0, headerWithAudioScrollDistance],
    outputRange: [headerWithAudioMaxHeight, headerWithAudioMinHeight],
    extrapolate: 'clamp',
  });

  const imageOpacity = props.scrollY.interpolate({
    inputRange: [0, headerWithAudioScrollDistance],
    outputRange: [1, 0],
    extrapolate: 'extend'
  });

  return (
    <Animated.View style={[styles.header, { height: headerHeight }]}>
      <LinearGradient
        colors={['#347cb6', 'rgba(170, 73, 133, 0.88)']}
        start={{x: 0, y: 0}} end={{x: 1, y: 0}}
        style={{height: '100%', width: '100%'}}
      >
        <Animated.Image
          source={props.image}
          style={[styles.headerImage, {opacity: imageOpacity}]}
          resizeMode="cover"
        />
        <ScrollViewHeaderNavigationComponent scrollY={props.scrollY} title={props.title} />
        <HeaderAudioControlComponent scrollY={props.scrollY} />
      </LinearGradient>
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
  headerImage: {
    height: getStyleOfDevice(110, 100),
    width: '100%',
    position: 'absolute', top: 0,
  }
});

export default ScrollViewHeaderComponent;