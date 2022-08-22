import React from 'react';
import {View} from 'react-native';
import {Card} from 'react-native-paper';

import HorizontalCardImageComponent from './HorizontalCardImageComponent';
import HorizontalCardInfoComponent from './HorizontalCardInfoComponent';
import { cardElevation } from '../../../constants/component_constant';
import { getStyleOfDevice } from '../../../utils/responsive_util';
import tabletStyles from '../../../assets/stylesheets/tablet/horizontalCardComponentStyles';
import mobileStyles from '../../../assets/stylesheets/mobile/horizontalCardComponentStyles';

const styles = getStyleOfDevice(tabletStyles, mobileStyles);

const HorizontalCardComponent = (props) => {
  return (
    <Card mode="elevated" elevation={cardElevation} style={[styles.container, props.containerStyle]}
      onPress={() => console.log('on press card ===')}
    >
      <View style={{flex: 1, flexDirection: 'row'}}>
        <HorizontalCardImageComponent image={props.item.image} />
        <HorizontalCardInfoComponent title={props.item.title} points={props.item.points} hasAudio={props.item.has_audio} />
      </View>
    </Card>
  )
}

export default HorizontalCardComponent;