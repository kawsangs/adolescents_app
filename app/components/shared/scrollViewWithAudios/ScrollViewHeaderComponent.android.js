import React from 'react';
import { Animated, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useSelector } from 'react-redux';

import color, {backgroundColors} from '../../../themes/color';
import HeaderAudioControlComponent from './HeaderAudioControlComponent';
import ScrollViewHeaderNavigationComponent from './ScrollViewHeaderNavigationComponent';
import { headerWithAudioMaxHeight, headerWithAudioMinHeight, headerWithAudioScrollDistance } from '../../../constants/android_component_constant';
import {getStyleOfDevice} from '../../../utils/responsive_util';

const ScrollViewHeaderComponent = (props) => {
  const appTheme = useSelector(state => state.appTheme.value);
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
        colors={!!appTheme ? [appTheme.secondary_color, appTheme.primary_color] : backgroundColors}
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
    height: getStyleOfDevice(110, 100),
    width: '100%',
    position: 'absolute',
    top: 0,
  }
});

export default ScrollViewHeaderComponent;