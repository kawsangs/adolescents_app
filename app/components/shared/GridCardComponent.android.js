import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {Card} from 'react-native-paper';

import BoldLabelComponent from './BoldLabelComponent';
import CardPointAndAudioFooterComponent from './CardPointAndAudioFooterComponent';
import AudioWaveButtonComponent from './AudioWaveButtonComponent';
import GridCardNoSubCategoryComponent from './gridCards/GridCardNoSubCategoryComponent';
import GridCardWithSubCategoryComponent from './gridCards/GridCardWithSubCategoryComponent';
import {cardBorderRadius, cardElevation, cardTitleFontSize} from '../../constants/component_constant';
import Category from '../../models/Category';
import visitService from '../../services/visit_service';
import componentUtil from '../../utils/component_util';

const GridCardComponent = (props) => {
  const points = Category.getSubCategories(props.item.uuid).length;
  const renderInfoWithNoSubCategory = () => {
    return <GridCardNoSubCategoryComponent
              title={props.item.name}
              uuid={props.item.uuid}
              audio={props.item.audioSource}
              playingUuid={props.playingUuid}
              updatePlayingUuid={props.updatePlayingUuid}
           />
  }

  const renderInfoWithSubCategory = () => {
    return <GridCardWithSubCategoryComponent
              title={props.item.name}
              uuid={props.item.uuid}
              audio={props.item.audioSource}
              playingUuid={props.playingUuid}
              updatePlayingUuid={props.updatePlayingUuid}
           />
  }

  const onPress = () => {
    props.updatePlayingUuid(null);
    visitService.recordVisitCategory(props.item);
  }

  return (
    <Card mode="elevated" elevation={cardElevation} style={[styles.container, props.containerStyle]}
      onPress={() => onPress()}
    >
      <Image source={props.item.imageSource} resizeMode='cover' style={styles.image} />
      { points > 0 ? renderInfoWithSubCategory() : renderInfoWithNoSubCategory() }
    </Card>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: cardBorderRadius,
    elevation: cardElevation,
    width: '48%',
    paddingLeft: 0,
    paddingBottom: 0
  },
  image: {
    borderTopLeftRadius: cardBorderRadius,
    borderTopRightRadius: cardBorderRadius,
    height: 98,
    width: '100%',
  },
});

export default GridCardComponent;