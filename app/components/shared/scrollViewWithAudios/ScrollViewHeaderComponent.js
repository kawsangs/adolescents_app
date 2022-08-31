import React from 'react';
import { Animated, StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';

import color from '../../../themes/color';
import HeaderAudioControlComponent from './HeaderAudioControlComponent';
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

  const titleOpacity = props.scrollY.interpolate({
    inputRange: [0, headerWithAudioScrollDistance],
    outputRange: [0, 1],
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
          source={require('../../../assets/images/android_landscape.jpeg')}
          style={[styles.headerImage, {opacity: imageOpacity}]}
          resizeMode="cover"
        />
        <Appbar.Header style={{backgroundColor: 'rgba(0, 0, 0, 0)', elevation: 0}}>
          <Appbar.BackAction />
          <Animated.View style={{flex: 1, paddingLeft: 8, opacity: titleOpacity}}>
            <Appbar.Content title={props.title} style={{justifyContent: 'center'}} />
          </Animated.View>
        </Appbar.Header>

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