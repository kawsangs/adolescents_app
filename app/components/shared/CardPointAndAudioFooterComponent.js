import React from 'react';
import {View, Text} from 'react-native';
import { useTranslation } from 'react-i18next';

import AudioButtonComponent from './AudioButtonComponent';
import {getStyleOfDevice} from '../../utils/responsive_util';
import tabletStyles from '../../assets/stylesheets/tablet/cardPointAndAudioFooterComponentStyles';
import mobileStyles from '../../assets/stylesheets/mobile/cardPointAndAudioFooterComponentStyles';

const cardStyles = getStyleOfDevice(tabletStyles, mobileStyles);

const CardPointAndAudioFooterComponent = (props) => {
  const {t} = useTranslation();
  return (
    <View style={cardStyles.container}>
      <Text style={cardStyles.label}>{t('point', { count: props.points })}</Text>
      <AudioButtonComponent hasAudio={props.hasAudio} />
    </View>
  )
}

export default CardPointAndAudioFooterComponent;