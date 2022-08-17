import React from 'react';
import { View } from 'react-native';
import {Slider} from '@miblanchard/react-native-slider';

import color from '../../themes/color';
import componentUtil from '../../utils/component_util';
import { headerWithAudioScrollDistance } from '../../constants/component_constant';

const HeaderAudioSliderComponent = (props) => {
  const thumbSize = props.scrollY.interpolate({
    inputRange: [0, headerWithAudioScrollDistance],
    outputRange: [20, 15],
    extrapolate: 'clamp',
  });

  return (
    <View style={{paddingHorizontal: 16, height: 13, borderWidth: 0, backgroundColor: color.whiteColor, marginTop: 16}}>
      <Slider
        value={props.value}
        minimumValue={0}
        maximumValue={100}
        maximumTrackTintColor={color.lightGrayColor}
        minimumTrackTintColor={color.lightBlackColor}
        containerStyle={{top: -22}}
        thumbTouchSize={{ width: componentUtil.pressableItemSize(), height: componentUtil.pressableItemSize() }}
        thumbStyle={{backgroundColor: color.whiteColor, borderColor: color.blackColor, borderWidth: 2, width: thumbSize, height: thumbSize }}
      />
    </View>
  )
}

export default HeaderAudioSliderComponent;