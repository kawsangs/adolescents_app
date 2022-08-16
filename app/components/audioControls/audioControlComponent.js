import React from 'react';
import { Animated, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import componentUtil from '../../utils/component_util';

const iconSize = 30;
const playPauseIconSize = 60;

const AudioControlComponent = (props) => {
  const button = (iconName, size) => {
    return <TouchableOpacity style={styles.button}>
              <Icon name={iconName} size={size} color='black' />
           </TouchableOpacity>
  }

  return (
    <View style={{paddingHorizontal: 16, flex: 1, borderWidth: 0}}>
      <View style={{flex: 1}}>
        <Animated.View style={[styles.audioControl,
          {transform: [{scaleX: props.audioControlScale}, {scaleY: props.audioControlScale}, {translateY: props.audioControlMarginTop}]}]}
        >
          { button('step-backward', iconSize) }
          { button('pause-circle', playPauseIconSize) }
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
    borderWidth: 0
  },
  button: {
    minWidth: componentUtil.pressableItemSize(),
    minHeight: componentUtil.pressableItemSize(),
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: componentUtil.pressableItemSize() - 15,
  }
});

export default AudioControlComponent;