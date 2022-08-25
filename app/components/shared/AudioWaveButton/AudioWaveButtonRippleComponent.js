import React, { useEffect, useState } from 'react';
import { Animated, StyleSheet } from 'react-native';
import color from '../../../themes/color';
import rippleAnimationHelper from '../../../helpers/ripple_animation_helper';

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

    props.startAnimating ? rippleAnimationHelper.start(animations) : rippleAnimationHelper.reset(animations);
  }, [props.startAnimating])

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