import React, { useEffect, useState } from 'react';
import { Animated, StyleSheet } from 'react-native';
import color from '../../../themes/color';

const AudioWaveButtonRippleComponent  = (props) => {
  const [componentDidMount, setComponentDidMount] = useState(false);
  const [state, setState] = useState({
    opacity1: new Animated.Value(1),
    opacity2: new Animated.Value(1),
    opacity3: new Animated.Value(1),
    scale1: new Animated.Value(0),
    scale2: new Animated.Value(0),
    scale3: new Animated.Value(0),
  });

  const animations = [
    { scale: state.scale1, opacity: state.opacity1 },
    { scale: state.scale2, opacity: state.opacity2 },
    { scale: state.scale3, opacity: state.opacity3 },
  ];

  useEffect(() => {
    if (!componentDidMount) {
      setComponentDidMount(true);
      return;
    }

    props.startAnimating ? runAnimation() : resetAnimation();
  }, [props.startAnimating])

  const runAnimation = () => {
    animations.map((animation, index) => {
      Animated.loop(
        Animated.parallel([
          animatedTiming(animation.scale, 1.5, index * 400),
          animatedTiming(animation.opacity, 0, index * 400),
        ], { useNativeDriver: true })
      ).start();
    });
  }

  const animatedTiming = (type, toValue, delay) => {
    return Animated.timing(type, {
            toValue: toValue,
            duration: 2000,
            delay: delay,
            useNativeDriver: true
          })
  }

  const resetAnimation = () => {
    Animated.loop(
      Animated.parallel(timingAnimations())
    ).reset();
  }

  const timingAnimations = () => {
    const animated = [];
    animations.map(animation => {
      animated.push(Animated.timing(animation.scale));
      animated.push(Animated.timing(animation.opacity));
    });
    return animated;
  }

  const rippleView = (index) => {
    return <Animated.View key={index} style={[ StyleSheet.absoluteFillObject, styles.ripple,
              {opacity: animations[index].opacity, transform: [{ scale: animations[index].scale }], height: props.size, width: props.size, borderRadius: props.size }
            ]} />
  }

  return [...Array(3).keys()].map((index) => rippleView(index))
}

const styles = StyleSheet.create({
  ripple: {
    backgroundColor: color.blackColor,
  }
});

export default AudioWaveButtonRippleComponent;