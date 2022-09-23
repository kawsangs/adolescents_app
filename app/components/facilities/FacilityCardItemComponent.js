import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {Card} from 'react-native-paper';

import FacilityCardInfoComponent from './FacilityCardInfoComponent';
import { cardElevation, cardBorderRadius } from '../../constants/component_constant';

const FacilityCardItemComponent = (props) => {

  const renderImage = () => {
    return (
      <View style={{flex: 2}}>
        <Image source={props.facility.imageSource} style={styles.image} resizeMode='cover' />
      </View>
    )
  }

  const renderInfo = () => {
    return <FacilityCardInfoComponent uuid={props.facility.uuid} name={props.facility.name} description={props.facility.description} audio={props.facility.audioSource}
              playingUuid={props.playingUuid}
              updatePlayingUuid={props.updatePlayingUuid}
           />
  }

  return (
    <Card mode="elevated" elevation={cardElevation} style={[styles.container, props.containerStyle]}
      onPress={() => console.log('on press card ===')}
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
    height: 180,
    marginTop: 11
  },
  image: {
    borderTopLeftRadius: cardBorderRadius,
    borderBottomLeftRadius: cardBorderRadius,
    width: '100%',
    height: '100%',
  },
});

export default FacilityCardItemComponent;