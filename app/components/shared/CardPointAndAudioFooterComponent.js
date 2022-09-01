import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import { useTranslation } from 'react-i18next';

import PlayAudioComponent from './PlayAudioComponent';
import color from '../../themes/color';
import {getStyleOfDevice} from '../../utils/responsive_util';
import tabletStyles from '../../assets/stylesheets/tablet/cardPointAndAudioFooterComponentStyles';
import mobileStyles from '../../assets/stylesheets/mobile/cardPointAndAudioFooterComponentStyles';

const cardStyles = getStyleOfDevice(tabletStyles, mobileStyles);

const CardPointAndAudioFooterComponent = (props) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const {t} = useTranslation();
  useEffect(() => {
    if (!!props.playingUuid && props.playingUuid != props.uuid)
      setIsPlaying(false);
  }, [props.playingUuid]);

  const toggleIsPlaying = () => {
    setIsPlaying(!isPlaying);
    props.updatePlayingUuid(props.uuid)
  }

  const stopPlaying = () => {
    setIsPlaying(false);
    props.updatePlayingUuid(null);
  }

  return (
    <View style={cardStyles.container}>
      <Text style={cardStyles.label}>{t('point', { count: props.points })}</Text>

      <PlayAudioComponent
        playIcon='volume-2'
        pauseIcon='pause'
        iconSize={24}
        audio={props.audio}
        btnStyle={{borderWidth: 0, borderRadius: 0}}
        itemId={props.uuid}
        playingId={props.playingUuid}
        isPlaying={isPlaying}
        toggleIsPlaying={() => toggleIsPlaying()}
        stopPlaying={() => stopPlaying()}
      />
    </View>
  )
}

export default CardPointAndAudioFooterComponent;