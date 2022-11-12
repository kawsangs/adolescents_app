import React from 'react';
import {View} from 'react-native';
import {Card} from 'react-native-paper';

import BoldLabelComponent from './BoldLabelComponent';
import TiltedCardImageComponent from './tiltedCard/TiltedCardImageComponent';
import CardPointAndAudioFooterComponent from './CardPointAndAudioFooterComponent';
import categoryVisitService from '../../services/category_visit_service';
import { getStyleOfDevice } from '../../utils/responsive_util';
import categoryHelper from '../../helpers/category_helper';
import tabletStyles from '../../assets/stylesheets/tablet/tiltedCardComponentStyles';
import mobileStyles from '../../assets/stylesheets/mobile/tiltedCardComponentStyles';
import { cardElevation } from '../../constants/component_constant';

const styles = getStyleOfDevice(tabletStyles, mobileStyles);

const TiltedCardComponent = (props) => {
  const onPress = () => {
    props.updatePlayingUuid(null);
    categoryVisitService.recordVisit(props.item);
  }

  return (
    <Card mode="elevated" elevation={cardElevation} style={[styles.container, props.containerStyle]}
      onPress={() => onPress()}
    >
      <View style={styles.tiltedView} />
      <View style={styles.secondTiltedView} />

      <View style={styles.backgroundContainer}>
        <View style={styles.infoContainer}>
          <TiltedCardImageComponent image={props.item.imageSource} />

          <View style={styles.footer}>
            <BoldLabelComponent label={props.item.name} numberOfLines={2} style={styles.title} />
            <CardPointAndAudioFooterComponent
              uuid={props.item.uuid}
              points={categoryHelper.getSubPoint(props.item)}
              audio={props.item.audioSource}
              playingUuid={props.playingUuid}
              updatePlayingUuid={props.updatePlayingUuid}
              containerStyle={{paddingLeft: 8, paddingBottom: 1}}
            />
          </View>
        </View>
      </View>
    </Card>
  );
}

export default TiltedCardComponent;