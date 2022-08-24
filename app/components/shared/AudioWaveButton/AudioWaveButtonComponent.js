import React, { useState } from 'react';
import { Animated, View, StyleSheet } from 'react-native';

import AudioWaveButtonRippleComponent from './AudioWaveButtonRippleComponent';
import PlayAudio from '../PlayAudio';
import color from '../../../themes/color';
import componentUtil from '../../../utils/component_util';

const size = componentUtil.pressableItemSize();

const AudioWaveButtonComponent = (props) => {
  const [startAnimating, setStartAnimating] = useState(false);
  const toggleAnimation = () => {
    setStartAnimating(!startAnimating);
  }

  return (
    <View style={[styles.center, props.containerStyle]}>
      <AudioWaveButtonRippleComponent size={size} startAnimating={startAnimating} />
      <PlayAudio iconName='play-outline' size={24} color={color.primaryColor}
        btnStyle={styles.audioBtn}
        iconStyle={{marginLeft: 2}}
        onPress={() => toggleAnimation()}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  audioBtn: {
    backgroundColor: color.whiteColor,
    borderColor: color.whiteColor,
    borderWidth: 0,
    elevation: 5,
    zIndex: 10,
  }
});

export default AudioWaveButtonComponent;