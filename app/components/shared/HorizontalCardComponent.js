import React from 'react';
import {View} from 'react-native';
import {Card} from 'react-native-paper';

import HorizontalCardImageComponent from './horizontalCard/HorizontalCardImageComponent';
import HorizontalCardInfoComponent from './horizontalCard/HorizontalCardInfoComponent';
import { cardElevation } from '../../constants/component_constant';
import { getStyleOfDevice } from '../../utils/responsive_util';
import tabletStyles from '../../assets/stylesheets/tablet/horizontalCardComponentStyles';
import mobileStyles from '../../assets/stylesheets/mobile/horizontalCardComponentStyles';

const styles = getStyleOfDevice(tabletStyles, mobileStyles);

const HorizontalCardComponent = (props) => {
  return (
    <Card mode="elevated" elevation={cardElevation} style={[styles.container, props.containerStyle]}
      onPress={() => console.log('on press card ===')}
    >
      <View style={{flex: 1, flexDirection: 'row'}}>
        <HorizontalCardImageComponent image={props.item.image} />
        <HorizontalCardInfoComponent
          uuid={props.item.uuid}
          title={props.item.title}
          points={props.item.points}
          audio={props.item.audio}
          playingUuid={props.playingUuid}
          updatePlayingUuid={props.updatePlayingUuid}
        />
      </View>
    </Card>
  )
}

export default HorizontalCardComponent;