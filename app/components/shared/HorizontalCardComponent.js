import React from 'react';
import {View} from 'react-native';
import {Card} from 'react-native-paper';

import HorizontalCardImageComponent from './horizontalCard/HorizontalCardImageComponent';
import HorizontalCardInfoComponent from './horizontalCard/HorizontalCardInfoComponent';
import { cardElevation } from '../../constants/component_constant';
import Category from '../../models/Category';
import navigationHelper from '../../helpers/navigation_helper';
import { getStyleOfDevice } from '../../utils/responsive_util';
import tabletStyles from '../../assets/stylesheets/tablet/horizontalCardComponentStyles';
import mobileStyles from '../../assets/stylesheets/mobile/horizontalCardComponentStyles';

const styles = getStyleOfDevice(tabletStyles, mobileStyles);

const HorizontalCardComponent = (props) => {
  return (
    <Card mode="elevated" elevation={cardElevation} style={[styles.container, props.containerStyle]}
      onPress={() => navigationHelper.navigateCategory(props.item.uuid)}
    >
      <View style={{flex: 1, flexDirection: 'row'}}>
        <HorizontalCardImageComponent image={props.item.image_url} />
        <HorizontalCardInfoComponent
          uuid={props.item.uuid}
          title={props.item.name}
          points={Category.getSubCategories(props.item.uuid).length}
          audio={props.item.audio_url}
          playingUuid={props.playingUuid}
          updatePlayingUuid={props.updatePlayingUuid}
        />
      </View>
    </Card>
  )
}

export default HorizontalCardComponent;