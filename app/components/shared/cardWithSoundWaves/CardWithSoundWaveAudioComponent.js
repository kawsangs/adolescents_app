import React, { useEffect, useState, useMemo } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Sound from 'react-native-sound';
import {useTranslation} from 'react-i18next';

import AudioWaveButtonComponent from '../AudioWaveButtonComponent';
import componentUtil from '../../../utils/component_util';
import audioUtil from '../../../utils/audio_util';
import {mediumFontSize} from '../../../utils/font_size_util';
import translationHelper from '../../../helpers/translation_helper';

const CardWithSoundWaveAudioComponent = (props) => {
  const {i18n} = useTranslation();
  const [duration, setDuration] = useState(0);      // duration in second
  const [playSeconds, setPlaySeconds] = useState(0);

  // Get the duration of the audio file
  const audioPlayer = new Sound(props.audio, (error) => {
    if (!!error)
      return console.log('failed to play audio = ', error);

    setDuration(audioPlayer.getDuration());
    audioPlayer.release();
  });

  // useMemo will update the displayDuration only when the playSeconds and duration has changed
  const displayDuration = useMemo(() =>  audioUtil.getReverseSeconds(playSeconds, duration));

  useEffect(() => {
    // Watch the playing audio id if it is not the same then clear the play seconds
    if (!!props.playingUuid && props.playingUuid != props.itemUuid)
      setPlaySeconds(0);
  }, [props.playingUuid]);

  const updatePlaySeconds = (seconds) => {
    if (playSeconds != Math.round(seconds) || seconds == 0)
      setPlaySeconds(Math.round(seconds));
  }

  return (
    <View>
      <AudioWaveButtonComponent
        itemUuid={props.itemUuid}
        audio={props.audio}
        playingUuid={props.playingUuid}
        isSpeakerIcon={false}
        containerStyle={styles.btn}
        updatePlayingUuid={props.updatePlayingUuid}
        updatePlaySeconds={(seconds) => updatePlaySeconds(seconds)}
      />
      <Text style={styles.label}>{ translationHelper.translateNumber(displayDuration.toString(), i18n.language) }</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  btn: {
    borderWidth: 0,
    height: componentUtil.pressableItemSize(),
    width: componentUtil.pressableItemSize(),
    position: 'absolute',
    top: -32,
    zIndex: 10
  },
  label: {
    fontSize: mediumFontSize(),
    textAlign: 'right',
    color: 'black'
  }
});

export default CardWithSoundWaveAudioComponent;