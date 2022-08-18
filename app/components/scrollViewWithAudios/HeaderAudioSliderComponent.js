import React from 'react';
import { View, Text } from 'react-native';
import {Slider} from '@miblanchard/react-native-slider';

import color from '../../themes/color';
import componentUtil from '../../utils/component_util';
import timeUtil from '../../utils/time_util';
import { headerWithAudioScrollDistance, screenPaddingHorizontal } from '../../constants/component_constant';
import audioPlayerService from '../../services/audio_player_service';

const HeaderAudioSliderComponent = (props) => {
  const thumbSize = props.scrollY.interpolate({
    inputRange: [0, headerWithAudioScrollDistance],
    outputRange: [20, 15],
    extrapolate: 'clamp',
  });

  const onSlidingComplete = (value) => {
    console.log('sliding complete = ', value)
    audioPlayerService.seekTo(value);
  }

  const getReverseSecond = () => {
    if (props.playSeconds) {
      const reverseSecond = props.duration - props.playSeconds;
      return timeUtil.getFormattedMinuteFromSeconds(reverseSecond);
    }

    return '00:00';
  }

  return (
    <React.Fragment>
      <View style={{flexDirection: 'row', justifyContent:'space-between', paddingHorizontal: screenPaddingHorizontal}}>
        <Text>{ timeUtil.getFormattedMinuteFromSeconds(props.playSeconds) }</Text>
        <Text>- { getReverseSecond() }</Text>
      </View>

      <View style={{paddingHorizontal: screenPaddingHorizontal, height: 13, borderWidth: 0, backgroundColor: color.whiteColor, marginTop: 16}}>
        <Slider
          // value={props.value}
          value={0}
          minimumValue={0}
          maximumValue={100}
          maximumTrackTintColor={color.lightGrayColor}
          minimumTrackTintColor={color.lightBlackColor}
          containerStyle={{top: -22}}
          thumbTouchSize={{ width: componentUtil.pressableItemSize(), height: componentUtil.pressableItemSize() }}
          thumbStyle={{backgroundColor: color.whiteColor, borderColor: color.blackColor, borderWidth: 2, width: thumbSize, height: thumbSize }}
          onSlidingComplete={(value) => onSlidingComplete(value)}
        />
      </View>
    </React.Fragment>
  )
}

export default HeaderAudioSliderComponent;