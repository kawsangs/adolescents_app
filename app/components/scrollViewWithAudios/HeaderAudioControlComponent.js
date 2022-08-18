import React, { useState } from 'react';
import { View } from 'react-native';

import HeaderAudioControlButtonsComponent from './HeaderAudioControlButtonsComponent';
import HeaderAudioSliderComponent from './HeaderAudioSliderComponent';

const HeaderAudioControlComponent = (props) => {
  const [audioPlayer, setAudioPlayer] = useState({
    playSeconds: 0,
    duration: 0
  })

  const updateAudioPlayer = (playSeconds, duration) => {
    setAudioPlayer({ playSeconds, duration })
  }

  return (
    <React.Fragment>
      <View style={{paddingHorizontal: 16, flex: 1}}>
        <HeaderAudioControlButtonsComponent scrollY={props.scrollY}
          updateAudioPlayer={updateAudioPlayer}
        />

      </View>
      <HeaderAudioSliderComponent scrollY={props.scrollY} duration={audioPlayer.duration} playSeconds={audioPlayer.playSeconds} />
    </React.Fragment>
  )
}

export default HeaderAudioControlComponent;