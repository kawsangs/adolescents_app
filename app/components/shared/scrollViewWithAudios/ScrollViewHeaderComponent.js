import React from 'react';
import { Animated, StyleSheet, ImageBackground } from 'react-native';
import { Appbar } from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';

import color from '../../../themes/color';
import HeaderAudioControlComponent from './HeaderAudioControlComponent';
import { headerWithAudioMaxHeight, headerWithAudioMinHeight, headerWithAudioScrollDistance } from '../../../constants/component_constant';

const ScrollViewHeaderComponent = (props) => {
  const headerHeight = props.scrollY.interpolate({
    inputRange: [0, headerWithAudioScrollDistance],
    outputRange: [headerWithAudioMaxHeight, headerWithAudioMinHeight],
    extrapolate: 'clamp',
  });

  return (
    <Animated.View style={[styles.header, { height: headerHeight }]}>
      <LinearGradient
        colors={['#347cb6', 'rgba(170, 73, 133, 0.88)']}
        start={{x: 0, y: 0}} end={{x: 1, y: 0}}
        style={{height: '100%', width: '100%'}}
      >
        <ImageBackground
          source={require('../../../assets/images/android_landscape.jpeg')}
          resizeMode="cover"
          style={{width: '100%', height: 100}}
        >
          <Appbar.Header style={{backgroundColor: 'rgba(0, 0, 0, 0)', elevation: 0, zIndex: 1}}>
            <Appbar.BackAction />
            <Appbar.Content title={props.title} />
          </Appbar.Header>
        </ImageBackground>

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
});

export default ScrollViewHeaderComponent;