import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Card} from 'react-native-paper';

import FacilityCardInfoComponent from './FacilityCardInfoComponent';
import ImageComponent from '../shared/ImageComponent';
import EmptyImageComponent from '../shared/EmptyImageComponent';
import { cardElevation, cardBorderRadius } from '../../constants/component_constant';
import {getStyleOfDevice} from '../../utils/responsive_util';
import {navigationRef} from '../../navigators/app_navigator';
import visitService from '../../services/visit_service';

const FacilityCardItemComponent = (props) => {

  const renderImage = () => {
    return (
      <View style={{flex: props.facility.galleries[0] ? 2 : getStyleOfDevice(0.8, 1.2), paddingLeft: 8}}>
        { props.facility.galleries[0] ? 
          <ImageComponent source={props.facility.galleries[0]} resizeMode="cover" imageStyle={styles.image} emptyStyle={styles.emptyView} />
          :
          <EmptyImageComponent/>
        }
      </View>
    )
  }

  const renderInfo = () => {
    return <FacilityCardInfoComponent uuid={props.facility.uuid} name={props.facility.name} audio={props.facility.audioSource}
              services={props.facility.services}
              playingUuid={props.playingUuid}
              updatePlayingUuid={props.updatePlayingUuid}
              accessibilityLabel={props.accessibilityLabel}
           />
  }

  const viewDetail = () => {
    props.updatePlayingUuid(null);
    visitService.recordVisitFacility(props.facility, () => {
      navigationRef.current?.navigate('FacilityDetailView', {uuid: props.facility.uuid})
    });
  }

  return (
    <Card mode="elevated" elevation={cardElevation} style={[styles.container, props.containerStyle]} onPress={() => viewDetail()}>
      <View style={{flexDirection: 'row'}}>
        { renderImage() }
        { renderInfo() }
      </View>
    </Card>
  )
}

const styles = StyleSheet.create({
  container: {
    borderRadius: cardBorderRadius,
    height: 100,
    marginTop: 11,
  },
  image: {
    borderTopLeftRadius: cardBorderRadius,
    borderBottomLeftRadius: cardBorderRadius,
    width: '100%',
    height: '100%',
  },
  emptyView: {
    borderTopLeftRadius: cardBorderRadius,
    borderBottomLeftRadius: cardBorderRadius,
  }
});

export default FacilityCardItemComponent;