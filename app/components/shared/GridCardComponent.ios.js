import React from 'react';
import {Image} from 'react-native';
import {Card} from 'react-native-paper';

import GridCardNoSubCategoryComponent from './gridCards/GridCardNoSubCategoryComponent';
import GridCardWithSubCategoryComponent from './gridCards/GridCardWithSubCategoryComponent';
import {cardElevation} from '../../constants/component_constant';
import Category from '../../models/Category';
import visitService from '../../services/visit_service';
import {getStyleOfDevice} from '../../utils/responsive_util';
import tabletStyles from '../../assets/stylesheets/tablet/gridCardComponentStyles';
import mobileStyles from '../../assets/stylesheets/mobile/gridCardComponentStyles';

const styles = getStyleOfDevice(tabletStyles, mobileStyles);

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

export default GridCardComponent;