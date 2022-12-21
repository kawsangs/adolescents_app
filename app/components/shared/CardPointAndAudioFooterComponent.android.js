import React from 'react';
import {View, Text} from 'react-native';
import { useTranslation } from 'react-i18next';

import AudioWaveButtonComponent from './AudioWaveButtonComponent';
import {getStyleOfDevice} from '../../utils/responsive_util';
import componentUtil from '../../utils/component_util';
import translationHelper from '../../helpers/translation_helper';
import tabletStyles from '../../assets/stylesheets/tablet/cardPointAndAudioFooterComponentStyles';
import mobileStyles from '../../assets/stylesheets/mobile/cardPointAndAudioFooterComponentStyles';

const styles = getStyleOfDevice(tabletStyles, mobileStyles);

const CardPointAndAudioFooterComponent = (props) => {
  const {t, i18n} = useTranslation();

  const renderAudioBtn = () => {
    return (
      <AudioWaveButtonComponent
        itemUuid={props.uuid}
        audio={props.audio}
        playingUuid={props.playingUuid}
        isSpeakerIcon={true}
        containerStyle={{borderWidth: 0, zIndex: 10}}
        updatePlayingUuid={props.updatePlayingUuid}
        btnStyle={{elevation: 0, height: componentUtil.pressableItemSize(), width: componentUtil.pressableItemSize()}}
        accessibilityLabel={`កាតទី${props.index + 1}`}
      />
    )
  }

  return (
    <View style={[styles.container, props.containerStyle]}>
      <Text style={styles.label}>{translationHelper.translateNumber(props.points, i18n.language)} {t('point')}</Text>
      { renderAudioBtn() }
    </View>
  )
}

export default CardPointAndAudioFooterComponent;