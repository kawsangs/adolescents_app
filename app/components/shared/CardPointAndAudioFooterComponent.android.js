import React from 'react';
import {View, Text} from 'react-native';
import { useTranslation } from 'react-i18next';

import CustomAudioPlayerButtonComponent from './CustomAudioPlayerButtonComponent';
import {getStyleOfDevice} from '../../utils/responsive_util';
import translationHelper from '../../helpers/translation_helper';
import tabletStyles from '../../assets/stylesheets/tablet/cardPointAndAudioFooterComponentStyles';
import mobileStyles from '../../assets/stylesheets/mobile/cardPointAndAudioFooterComponentStyles';

const styles = getStyleOfDevice(tabletStyles, mobileStyles);

const CardPointAndAudioFooterComponent = (props) => {
  const {t} = useTranslation();

  const renderAudioBtn = () => {
    return <CustomAudioPlayerButtonComponent
              audio={props.audio}
              itemUuid={props.uuid}
              rippled={true}
              playingUuid={props.playingUuid}
              updatePlayingUuid={props.updatePlayingUuid}
              accessibilityLabel={`កាតទី${props.index + 1}`}
              buttonStyle={getStyleOfDevice({}, {height: 30, width: 30})}
              rippleStyle={getStyleOfDevice({}, {left: -9, top: -9})}
           />
  }

  return (
    <View style={[styles.container, props.containerStyle]}>
      <Text style={styles.label}>{translationHelper.translateNumber(props.points, t)} { t(props.pointPostfix || 'point', {count: parseInt(props.points)})}</Text>
      { renderAudioBtn() }
    </View>
  )
}

export default CardPointAndAudioFooterComponent;