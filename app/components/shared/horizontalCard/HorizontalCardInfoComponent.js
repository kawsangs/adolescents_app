import React from 'react';
import {View} from 'react-native';

import BoldLabelComponent from '../BoldLabelComponent';
import CardPointAndAudioFooterComponent from '../CardPointAndAudioFooterComponent';
import {normalFontSize} from '../../../utils/font_size_util';
import {getStyleOfDevice} from '../../../utils/responsive_util';
import tabletStyles from '../../../assets/stylesheets/tablet/horizontalCardInfoComponentStyles';
import mobileStyles from '../../../assets/stylesheets/mobile/horizontalCardInfoComponentStyles';

const styles = getStyleOfDevice(tabletStyles, mobileStyles);

const HorizontalCardInfoComponent = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <BoldLabelComponent label={props.title} numberOfLines={2} style={{ fontSize: normalFontSize() }} />
      </View>

      <CardPointAndAudioFooterComponent points={props.points} hasAudio={props.hasAudio} />
    </View>
  )
}

export default HorizontalCardInfoComponent;