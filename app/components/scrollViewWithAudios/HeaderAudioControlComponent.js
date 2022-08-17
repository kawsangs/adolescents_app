import React, { useState } from 'react';
import { View, Text } from 'react-native';

import HeaderAudioControlButtonsComponent from './HeaderAudioControlButtonsComponent';
import HeaderAudioSliderComponent from './HeaderAudioSliderComponent';

const HeaderAudioControlComponent = (props) => {
  const [playDuration, setPlayDuration] = useState(0);

  return (
    <React.Fragment>
      <View style={{paddingHorizontal: 16, flex: 1}}>
        <HeaderAudioControlButtonsComponent scrollY={props.scrollY} />

        <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
          <Text>00:14</Text>
          <Text>03:45</Text>
        </View>
      </View>
      <HeaderAudioSliderComponent scrollY={props.scrollY} value={playDuration} />
    </React.Fragment>
  )
}

export default HeaderAudioControlComponent;