import React from 'react';
import {View} from 'react-native';
import {useTranslation} from 'react-i18next';

import BoldLabelComponent from '../BoldLabelComponent';
import SquareCardImageComponent from './SquareCardImageComponent';
import CardPointAndAudioFooterComponent from '../CardPointAndAudioFooterComponent';
import { getStyleOfDevice } from '../../../utils/responsive_util';
import tabletStyles from '../../../assets/stylesheets/tablet/squareCardComponentStyles';
import mobileStyles from '../../../assets/stylesheets/mobile/squareCardComponentStyles';

const styles = getStyleOfDevice(tabletStyles, mobileStyles);

const SquareCardComponent = (props) => {
  const { t } = useTranslation();

  return (
    <View style={[styles.container, props.containerStyle]}>
      <View style={styles.tiltedView} />

      <View style={styles.backgroundContainer}>
        <View style={styles.infoContainer}>
          <SquareCardImageComponent image={require('../../../assets/images/img_no_background.png')} />

          <View style={styles.footer}>
            <BoldLabelComponent label={props.item.title} numberOfLines={1} style={styles.title} />
            <CardPointAndAudioFooterComponent points={props.item.points} hasAudio={props.item.has_audio} />
          </View>
        </View>
      </View>
    </View>
  );
}

export default SquareCardComponent;