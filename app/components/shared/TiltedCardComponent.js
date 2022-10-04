import React from 'react';
import {View, TouchableOpacity} from 'react-native';

import BoldLabelComponent from './BoldLabelComponent';
import TiltedCardImageComponent from './tiltedCard/TiltedCardImageComponent';
import CardPointAndAudioFooterComponent from './CardPointAndAudioFooterComponent';
import Category from '../../models/Category';
import visitService from '../../services/visit_service';
import { getStyleOfDevice } from '../../utils/responsive_util';
import tabletStyles from '../../assets/stylesheets/tablet/tiltedCardComponentStyles';
import mobileStyles from '../../assets/stylesheets/mobile/tiltedCardComponentStyles';

const styles = getStyleOfDevice(tabletStyles, mobileStyles);

const TiltedCardComponent = (props) => {
  const onPress = () => {
    props.updatePlayingUuid(null);
    visitService.recordVisitCategory(props.item)
  }

  return (
    <TouchableOpacity onPress={() => onPress()}
      style={[styles.container, props.containerStyle]}
    >
      <View style={styles.tiltedView} />

      <View style={styles.backgroundContainer}>
        <View style={styles.infoContainer}>
          <TiltedCardImageComponent image={props.item.imageSource} />

          <View style={styles.footer}>
            <BoldLabelComponent label={props.item.name} numberOfLines={2} style={styles.title} />
            <CardPointAndAudioFooterComponent
              uuid={props.item.uuid}
              points={new Category().getSubCategories(props.item.uuid).length}
              audio={props.item.audioSource}
              playingUuid={props.playingUuid}
              updatePlayingUuid={props.updatePlayingUuid}
              containerStyle={{paddingLeft: 8}}
            />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default TiltedCardComponent;