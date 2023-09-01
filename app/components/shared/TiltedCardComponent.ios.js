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
import Contact from '../../models/Contact';
import Facility from '../../models/Facility';
import Video from '../../models/Video';

const styles = getStyleOfDevice(tabletStyles, mobileStyles);

const TiltedCardComponent = (props) => {
  const subitem = {
    'catg_lvl_1_clinic_and_examination_service': { points: Facility.getAll().length, label: 'គ្លីនិក' },
    'catg_lvl_1_mental_support': { points: Contact.getMentalSupportContacts().length, label: 'សេវា' },
    'catg_lvl_1_entertainment': { points: Video.getAll().length, label: 'វីដេអូ' },
    'default': { points: categoryHelper.getSubPoint(props.item), label: 'ចំនុច' }
  }

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
          <TiltedCardImageComponent image={!!props.item.image ? props.item.image : categoryHelper.getFileByUrl(props.item.image_url, 'image')} />

          <View style={styles.footer}>
            <BoldLabelComponent label={props.item.name} numberOfLines={2} style={styles.title} />
            <CardPointAndAudioFooterComponent
              uuid={props.item.id}
              index={props.index}
              points={!!subitem[props.item.code] ? subitem[props.item.code].points : subitem.default.points}
              pointPostfix={!!subitem[props.item.code] ? subitem[props.item.code].label : subitem.default.label}
              audio={!!props.item.audio ? props.item.audio : categoryHelper.getFileByUrl(props.item.audio_url, 'audio')}
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