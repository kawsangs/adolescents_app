import React from 'react';
import {View, Text} from 'react-native';
import { useTranslation } from 'react-i18next';
import IonIcon from 'react-native-vector-icons/Ionicons';

import PlayAudioComponent from './PlayAudioComponent';
import {getStyleOfDevice} from '../../utils/responsive_util';
import tabletStyles from '../../assets/stylesheets/tablet/cardPointAndAudioFooterComponentStyles';
import mobileStyles from '../../assets/stylesheets/mobile/cardPointAndAudioFooterComponentStyles';

const styles = getStyleOfDevice(tabletStyles, mobileStyles);

const CardPointAndAudioFooterComponent = (props) => {
  const {t} = useTranslation();
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{t('point', { count: props.points })}</Text>

      <PlayAudioComponent
        playIcon='volume-high-outline'
        pauseIcon='pause'
        muteIcon='volume-mute-outline'
        iconSize={24}
        audio={props.audio}
        btnStyle={{borderWidth: 0, borderRadius: 0}}
        itemUuid={props.uuid}
        playingUuid={props.playingUuid}
        updatePlayingUuid={props.updatePlayingUuid}
      >
        <IonIcon/>
      </PlayAudioComponent>
    </View>
  )
}

export default CardPointAndAudioFooterComponent;