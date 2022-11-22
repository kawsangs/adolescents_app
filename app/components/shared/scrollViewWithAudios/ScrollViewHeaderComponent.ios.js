import React from 'react';
import { Animated, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import DeviceInfo from 'react-native-device-info';

import color, {backgroundColors} from '../../../themes/color';
import HeaderAudioControlComponent from './HeaderAudioControlComponent';
import ScrollViewHeaderNavigationComponent from './ScrollViewHeaderNavigationComponent';
import { iOSHeaderWithAudioMaxHeight, iOSHeaderWithAudioMinHeight, iOSHeaderWithAudioScrollDistance } from '../../../constants/component_constant';
import {getStyleOfDevice} from '../../../utils/responsive_util';

const ScrollViewHeaderComponent = (props) => {
  const headerHeight = props.scrollY.interpolate({
    inputRange: [0, iOSHeaderWithAudioScrollDistance],
    outputRange: [iOSHeaderWithAudioMaxHeight, iOSHeaderWithAudioMinHeight],
    extrapolate: 'clamp',
  });

  const imageOpacity = props.scrollY.interpolate({
    inputRange: [0, iOSHeaderWithAudioScrollDistance],
    outputRange: [1, 0],
    extrapolate: 'extend'
  });

  return (
    <Animated.View style={[styles.header, { height: headerHeight }]}>
      <LinearGradient
        colors={backgroundColors}
        start={{x: 0, y: -0.3}} end={{x: 1, y: 0}}
        style={{height: '100%', width: '100%'}}
      >
        <Animated.Image
          source={props.image}
          style={[styles.headerImage, {opacity: imageOpacity}]}
          resizeMode="contain"
        />
        <ScrollViewHeaderNavigationComponent scrollY={props.scrollY} title={props.title} textSize={props.textSize} updateTextSize={props.updateTextSize} />
        <HeaderAudioControlComponent uuid={props.uuid} audio={props.audio} scrollY={props.scrollY} />
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
    height: getStyleOfDevice(130, 100),
    width: '100%',
    position: 'absolute',
    top: DeviceInfo.hasNotch() ? 46 : 26,
  }
});

export default ScrollViewHeaderComponent;