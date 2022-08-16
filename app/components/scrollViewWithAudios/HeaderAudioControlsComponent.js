import React from 'react';
import { Animated, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import componentUtil from '../../utils/component_util';

const iconSize = 30;
const playPauseIconSize = 60;

const HeaderAudioControlsComponent = (props) => {
  const button = (iconName, size) => {
    return <TouchableOpacity style={styles.button}>
              <Icon name={iconName} size={size} color='black' />
           </TouchableOpacity>
  }

  // Scale for making the audio controls smaller or bigger when scrolling
  const audioControlScale = props.scrollY.interpolate({
    inputRange: [0, props.headerScrollDistance],
    outputRange: [1, 0.8],
    extrapolate: 'clamp',
  });

  const audioControlPositionY = props.scrollY.interpolate({
    inputRange: [0, props.headerScrollDistance],
    outputRange: [40, 20],
    extrapolate: 'clamp'
  });

  return (
    <View style={{paddingHorizontal: 16, flex: 1, borderWidth: 0}}>
      <View style={{flex: 1}}>
        <Animated.View style={[styles.audioControl,
          {transform: [{scaleX: audioControlScale}, {scaleY: audioControlScale}, {translateY: audioControlPositionY}]}]}
        >
          { button('step-backward', iconSize) }
          { button('play-circle', playPauseIconSize) }
          { button('step-forward', iconSize) }
        </Animated.View>
      </View>

      <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
        <Text>00:14</Text>
        <Text>03:45</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  audioControl: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    minWidth: componentUtil.pressableItemSize(),
    minHeight: componentUtil.pressableItemSize(),
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: componentUtil.pressableItemSize() - 15,
  }
});

export default HeaderAudioControlsComponent;