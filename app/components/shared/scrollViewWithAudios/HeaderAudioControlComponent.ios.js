import React, { useCallback, useEffect, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { AppState } from 'react-native';

import HeaderAudioControlButtonsComponent from './HeaderAudioControlButtonsComponent';
import AudioDurationLabelComponent from './AudioDurationLabelComponent';
import HeaderAudioSliderComponent from './HeaderAudioSliderComponent';

const HeaderAudioControlComponent = (props) => {
  const [state, setState] = useState({
    audioPlayer: null,
    playSeconds: 0,
    duration: 0,
    countInterval: null,
  });

  useEffect(() => {
    const subscription = AppState.addEventListener('change', handleAppStateChange);
    return () => !!subscription && subscription.remove();
  }, [state.audioPlayer]);
  
  const handleAppStateChange = (nextAppState) => {
    if (AppState.currentState == 'background' && !!state.audioPlayer && !!state.countInterval)
      clearPlayingAudio();
  };

  useFocusEffect(
    useCallback(() => {
      return () => {
        clearPlayingAudio();
      }
    }, [state.audioPlayer])
  );

  const clearPlayingAudio = () => {
    if (!!state.audioPlayer && !!state.countInterval) {
      state.audioPlayer.release();
      clearInterval(state.countInterval);
      setState({ audioPlayer: null, playSeconds: 0, duration: 0, countInterval: null });
    }
  }

  const updateState = (audioPlayer, playSeconds, duration, countInterval) => {
    setState({ audioPlayer, playSeconds, duration, countInterval })
  }

  return (
    <React.Fragment>
      <HeaderAudioControlButtonsComponent uuid={props.uuid} audio={props.audio} scrollY={props.scrollY} hideAnimation={props.hideAnimation}
        audioPlayer={state.audioPlayer} countInterval={state.countInterval}
        updateAudioPlayer={updateState}
      />
      <AudioDurationLabelComponent playSeconds={state.playSeconds} duration={state.duration} scrollY={props.scrollY} />
      <HeaderAudioSliderComponent scrollY={props.scrollY}
        audioPlayer={state.audioPlayer} duration={state.duration} playSeconds={state.playSeconds}
        countInterval={state.countInterval}
        updateAudioPlayer={updateState}
        sliderContainerStyle={props.sliderContainerStyle}
      />
    </React.Fragment>
  )
}

export default HeaderAudioControlComponent;