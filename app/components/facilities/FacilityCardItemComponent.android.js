import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Card} from 'react-native-paper';

import FacilityCardInfoComponent from './FacilityCardInfoComponent';
import ImageComponent from '../shared/ImageComponent';
import { cardElevation, cardBorderRadius } from '../../constants/component_constant';
import {isShortScreenDevice} from '../../utils/responsive_util';
import {navigationRef} from '../../navigators/app_navigator';

const FacilityCardItemComponent = (props) => {

  const renderImage = () => {
    return (
      <View style={{flex: 2}}>
        <ImageComponent source={props.facility.galleries[0]} resizeMode="cover" imageStyle={styles.image} emptyStyle={styles.emptyView} />
      </View>
    )
  }

  const renderInfo = () => {
    return <FacilityCardInfoComponent uuid={props.facility.uuid} name={props.facility.name} description={props.facility.description} audio={props.facility.audioSource}
              latitude={props.facility.latitude} longitude={props.facility.longitude}
              playingUuid={props.playingUuid}
              updatePlayingUuid={props.updatePlayingUuid}
           />
  }

  return (
    <Card mode="elevated" elevation={cardElevation} style={[styles.container, props.containerStyle]}
      onPress={() => navigationRef.current?.navigate('FacilityDetailView', {uuid: props.facility.uuid})}
    >
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
    height: isShortScreenDevice() ? 160 : 180,
    marginTop: 11
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