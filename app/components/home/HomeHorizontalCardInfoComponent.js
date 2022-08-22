import React from 'react';
import {View, Text} from 'react-native';
import {useTranslation} from 'react-i18next';

import BoldLabelComponent from '../shared/BoldLabelComponent';
import AudioButtonComponent from '../shared/AudioButtonComponent';
import {normalFontSize} from '../../utils/font_size_util';
import {getStyleOfDevice} from '../../utils/responsive_util';
import tabletStyles from '../../assets/stylesheets/tablet/homeHorizontalCardInfoComponentStyles';
import mobileStyles from '../../assets/stylesheets/mobile/homeHorizontalCardInfoComponentStyles';

const styles = getStyleOfDevice(tabletStyles, mobileStyles);

const HomeHorizontalCardInfoComponent = (props) => {
  const {t} = useTranslation();

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <BoldLabelComponent label={props.title} numberOfLines={2} style={{ fontSize: normalFontSize() }} />
      </View>

      <View style={styles.subtitleContainer}>
        <Text style={styles.subtitle}>{t('point', { count: props.points })}</Text>
        <AudioButtonComponent hasAudio={props.hasAudio} />
      </View>
    </View>
  )
}

export default HomeHorizontalCardInfoComponent;