import React from 'react';
import {View} from 'react-native';
import {Card} from 'react-native-paper';

import HorizontalCardImageComponent from './horizontalCard/HorizontalCardImageComponent';
import HorizontalCardInfoComponent from './horizontalCard/HorizontalCardInfoComponent';
import { cardElevation } from '../../constants/component_constant';
import Category from '../../models/Category';
import visitService from '../../services/visit_service';
import navigationService from '../../services/navigation_service';
import { getStyleOfDevice } from '../../utils/responsive_util';
import tabletStyles from '../../assets/stylesheets/tablet/horizontalCardComponentStyles';
import mobileStyles from '../../assets/stylesheets/mobile/horizontalCardComponentStyles';

const styles = getStyleOfDevice(tabletStyles, mobileStyles);

const HorizontalCardComponent = (props) => {
  const onPress = () => {
    props.updatePlayingUuid(null);
    visitService.recordVisitedCategory(props.item)
    navigationService.navigateCategory(props.item.uuid)
  }

  return (
    <Card mode="elevated" elevation={cardElevation} style={[styles.container, props.containerStyle]}
      onPress={() => onPress()}
    >
      <View style={{flex: 1, flexDirection: 'row'}}>
        <HorizontalCardImageComponent image={props.item.imageSource} />
        <HorizontalCardInfoComponent
          uuid={props.item.uuid}
          title={props.item.name}
          points={Category.getSubCategories(props.item.uuid).length}
          audio={props.item.audioSource}
          playingUuid={props.playingUuid}
          updatePlayingUuid={props.updatePlayingUuid}
        />
      </View>
    </Card>
  )
}

export default HorizontalCardComponent;