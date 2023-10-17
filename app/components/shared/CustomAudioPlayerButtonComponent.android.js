import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AudioPlayerButton from 'react-native-audio-player-button';
import color from '../../themes/color';
import componentUtil from '../../utils/component_util';
import {setPlayingAudio} from '../../features/audios/currentPlayingAudioSlice';

const CustomAudioPlayerButtonComponent = (props) => {
  const dispatch = useDispatch();
  const playingUuid = useSelector(state => state.currentPlayingAudio.value)
  const btnSize = componentUtil.pressableItemSize()
  const rippleProps = props.rippled ? {
    buttonHeight: btnSize,
    buttonWidth: btnSize,
    rippleHeight: btnSize,
    rippleWidth: btnSize
  } : {};

  return <AudioPlayerButton
            {...props}
            {...rippleProps}
            isSpeakerIcon={true}
            iconSize={24}
            iconPrimaryColor={props.iconPrimaryColor || color.primaryColor}
            iconSecondaryColor={color.secondaryColor}
            allowPause={true}
            playingUuid={playingUuid}
            updatePlayingUuid={(uuid) => dispatch(setPlayingAudio(uuid))}
         />
}

export default CustomAudioPlayerButtonComponent;