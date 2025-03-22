import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AudioPlayerButton from 'react-native-audio-player-button';
import color from '../../themes/color';
import componentUtil from '../../utils/component_util';
import {setPlayingAudio} from '../../features/audios/currentPlayingAudioSlice';

const CustomAudioPlayerButtonComponent = (props) => {
  const dispatch = useDispatch();
  const playingUuid = useSelector(state => state.currentPlayingAudio.value)
  const appTheme = useSelector(state => state.appTheme.value);
  const btnSize = componentUtil.pressableItemSize()
  const rippleProps = props.rippled ? {
    buttonHeight: btnSize,
    buttonWidth: btnSize,
    rippleHeight: btnSize,
    rippleWidth: btnSize
  } : {};

  const updatePlayingUuid = (uuid) => {
    dispatch(setPlayingAudio(uuid))
    !!props.updatePlayingUuid && props.updatePlayingUuid(uuid);
  }

  return <AudioPlayerButton
            {...props}
            {...rippleProps}
            isSpeakerIcon={true}
            iconSize={24}
            iconPrimaryColor={props.iconPrimaryColor || (appTheme.primary_color ?? color.primaryColor)}
            iconSecondaryColor={color.secondaryColor}
            allowPause={true}
            playingUuid={playingUuid}
            updatePlayingUuid={(uuid) => updatePlayingUuid(uuid)}
         />
}

export default CustomAudioPlayerButtonComponent;