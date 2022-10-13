import React from 'react';
import {View, Text} from 'react-native';

import BoldLabelComponent from '../BoldLabelComponent';
import CardPointAndAudioFooterComponent from '../CardPointAndAudioFooterComponent';
import {getStyleOfDevice} from '../../../utils/responsive_util';
import tabletStyles from '../../../assets/stylesheets/tablet/horizontalCardInfoComponentStyles';
import mobileStyles from '../../../assets/stylesheets/mobile/horizontalCardInfoComponentStyles';

const styles = getStyleOfDevice(tabletStyles, mobileStyles);

const HorizontalCardInfoComponent = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <BoldLabelComponent label={props.title} numberOfLines={2} style={styles.title} />
      </View>

      <CardPointAndAudioFooterComponent uuid={props.uuid} points={props.points} audio={props.audio} playingUuid={props.playingUuid}
        updatePlayingUuid={props.updatePlayingUuid}
      />
    </View>
  )
}

export default HorizontalCardInfoComponent;