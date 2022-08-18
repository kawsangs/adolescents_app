import React, { useState } from 'react';

import HeaderAudioControlButtonsComponent from './HeaderAudioControlButtonsComponent';
import HeaderAudioSliderComponent from './HeaderAudioSliderComponent';

const HeaderAudioControlComponent = (props) => {
  const [state, setState] = useState({
    audioPlayer: null,
    playSeconds: 0,
    duration: 0,
    countInterval: null,
  })

  const updateState = (audioPlayer, playSeconds, duration, countInterval) => {
    setState({ audioPlayer, playSeconds, duration, countInterval })
  }

  return (
    <React.Fragment>
      <HeaderAudioControlButtonsComponent scrollY={props.scrollY}
        audioPlayer={state.audioPlayer} countInterval={state.countInterval}
        updateAudioPlayer={updateState}
      />
      <HeaderAudioSliderComponent scrollY={props.scrollY}
        audioPlayer={state.audioPlayer} duration={state.duration} playSeconds={state.playSeconds}
        countInterval={state.countInterval}
        updateAudioPlayer={updateState}
      />
    </React.Fragment>
  )
}

export default HeaderAudioControlComponent;