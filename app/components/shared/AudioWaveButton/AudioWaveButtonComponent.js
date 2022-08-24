import React, { useState } from 'react';
import { Animated, View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import PlayAudio from '../PlayAudio';
import color from '../../../themes/color';
import componentUtil from '../../../utils/component_util';

const size = componentUtil.pressableItemSize();

const WaveButton = () => {
  const [state, setState] = useState({
    opacity1: new Animated.Value(1),
    opacity2: new Animated.Value(1),
    opacity3: new Animated.Value(1),
    scale1: new Animated.Value(0),
    scale2: new Animated.Value(0),
    scale3: new Animated.Value(0),
  });
  const [isAnimated, setIsAnimated] = useState(false);

  const runAnimation = () => {
    const animations = [
      { scale: state.scale1, opacity: state.opacity1 },
      { scale: state.scale2, opacity: state.opacity2 },
      { scale: state.scale3, opacity: state.opacity3 },
    ];

    setIsAnimated(true);

    animations.map((animation, index) => {
      Animated.loop(
        Animated.parallel([
          Animated.timing(animation.scale, {
            toValue: 1.5,
            duration: 2000,
            delay: index * 400,
            useNativeDriver: true
          }),
          Animated.timing(animation.opacity, {
            toValue: 0,
            duration: 2000,
            delay: index * 400,
            useNativeDriver: true
          })
        ], { useNativeDriver: true })
      ).start();
    });
  }

  const stopAnimation = () => {
    setIsAnimated(false);
    Animated.loop(
      Animated.parallel([
        Animated.timing(state.scale1),
        Animated.timing(state.opacity1),
        Animated.timing(state.scale2),
        Animated.timing(state.opacity2),
        Animated.timing(state.scale3),
        Animated.timing(state.opacity3),
      ])
    ).stop();
  }

  const toggleAnimation = () => {
    console.log('toggle = ')

    if (!isAnimated) {
      runAnimation();
      return;
    }

    stopAnimation();
  }

  const animatedView = (index) => {
    const style = {
      0: { opacity: state.opacity1, scale: state.scale1 },
      1: { opacity: state.opacity2, scale: state.scale2 },
      2: { opacity: state.opacity3, scale: state.scale3 },
    }

    return <Animated.View key={index} style={[ StyleSheet.absoluteFillObject, styles.ripple, {opacity: style[index].opacity, transform: [{ scale: style[index].scale }] } ]} />
  }

  return (
    <View style={[styles.center]}>
      { [...Array(3).keys()].map((index) => animatedView(index)) }
      <PlayAudio size={20} color={color.primaryColor}
        btnStyle={{backgroundColor: color.whiteColor, borderColor: color.whiteColor, zIndex: 10}}
        onPress={() => toggleAnimation()}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  center: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  ripple: {
    height: size,
    width: size,
    borderRadius: size,
    backgroundColor: color.primaryColor
  }
});

export default WaveButton;