import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';

import HomeHorizontalCardImageComponent from './HomeHorizontalCardImageComponent';
import HomeHorizontalCardInfoComponent from './HomeHorizontalCardInfoComponent';
import { cardElevation, cardBorderRadius } from '../../constants/component_constant';
import { getStyleOfDevice } from '../../utils/responsive_util';

const HomeHorizontalCardComponent = (props) => {
  return (
    <Card mode="elevated" elevation={cardElevation} style={[styles.container, props.containerStyle]}
      onPress={() => console.log('on press card ===')}
    >
      <View style={{flexDirection: 'row'}}>
        <HomeHorizontalCardImageComponent image={props.item.image} />
        <HomeHorizontalCardInfoComponent title={props.item.title} points={props.item.points} hasAudio={props.item.has_audio} />
      </View>
    </Card>
  )
}

const styles = StyleSheet.create({
  container: {
    borderRadius: cardBorderRadius,
    height: getStyleOfDevice(104, 94),
    paddingLeft: 12,
    paddingRight: 4,
  }
});

export default HomeHorizontalCardComponent;