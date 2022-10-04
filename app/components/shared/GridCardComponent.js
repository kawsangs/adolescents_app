import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {Card} from 'react-native-paper';

import BoldLabelComponent from './BoldLabelComponent';
import CardPointAndAudioFooterComponent from './CardPointAndAudioFooterComponent';
import {cardBorderRadius, cardElevation, cardTitleFontSize} from '../../constants/component_constant';
import Category from '../../models/Category';
import visitService from '../../services/visit_service';

const GridCardComponent = (props) => {
  return (
    <Card mode="elevated" elevation={cardElevation} style={[styles.container, props.containerStyle]}
      onPress={() => visitService.recordVisitCategory(props.item)}
    >
      <Image source={props.item.imageSource} resizeMode='contain' style={styles.image} />

      <View style={styles.infoContainer}>
        <BoldLabelComponent label={props.item.name} numberOfLines={2} style={{fontSize: cardTitleFontSize}} />

        <CardPointAndAudioFooterComponent
          uuid={props.item.uuid}
          points={new Category().getSubCategories(props.item.uuid).length}
          audio={props.item.audioSource}
          playingUuid={props.playingUuid}
          updatePlayingUuid={props.updatePlayingUuid}
        />
      </View>
    </Card>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: cardBorderRadius,
    elevation: cardElevation,
    width: '48%',
  },
  infoContainer: {
    marginTop: 8,
    paddingHorizontal: 8,
    flex: 1,
    justifyContent: 'flex-end',
  },
  image: {
    borderTopLeftRadius: cardBorderRadius,
    borderTopRightRadius: cardBorderRadius,
    height: 90,
    width: '100%',

  }
});

export default GridCardComponent;