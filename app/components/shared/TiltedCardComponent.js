import React from 'react';
import {View} from 'react-native';

import BoldLabelComponent from './BoldLabelComponent';
import TiltedCardImageComponent from './tiltedCard/TiltedCardImageComponent';
import CardPointAndAudioFooterComponent from './CardPointAndAudioFooterComponent';
import { getStyleOfDevice } from '../../utils/responsive_util';
import tabletStyles from '../../assets/stylesheets/tablet/tiltedCardComponentStyles';
import mobileStyles from '../../assets/stylesheets/mobile/tiltedCardComponentStyles';

const styles = getStyleOfDevice(tabletStyles, mobileStyles);

const TiltedCardComponent = (props) => {
  return (
    <View style={[styles.container, props.containerStyle]}>
      <View style={styles.tiltedView} />

      <View style={styles.backgroundContainer}>
        <View style={styles.infoContainer}>
          <TiltedCardImageComponent image={require('../../assets/images/img_no_background.png')} />

          <View style={styles.footer}>
            <BoldLabelComponent label={props.item.title} numberOfLines={1} style={styles.title} />
            <CardPointAndAudioFooterComponent points={props.item.points} audio={props.item.audio} />
          </View>
        </View>
      </View>
    </View>
  );
}

export default TiltedCardComponent;