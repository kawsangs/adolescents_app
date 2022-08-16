import React from 'react';
import { StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';

import color from '../../themes/color';
import { cardElevation } from '../../constants/component_constant';
import CardInfoComponent from './card/CardInfoComponent';
import { getStyleOfDevice } from '../../utils/responsive_util';

const cardHeight = getStyleOfDevice(320, 290);

const CardComponent = (props) => {
  return (
    <Card mode="elevated" elevation={cardElevation} style={[styles.card, props.cardStyle]}>
      <Card.Cover source={require('../../assets/images/android_landscape.jpeg')} style={styles.cardCover} />
      <CardInfoComponent title={props.title} subtitle={props.subtitle} />
    </Card>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: color.whiteColor,
    height: cardHeight,
  },
  cardCover: {
    height: (cardHeight * 55) / 100,
  }
});
// The card cover (image) will be rendered 55% of the card item because
// the default height is taking to much space when rendering on mobil device

export default CardComponent;

// How to use
// <CardComponent
//   title='Card title'
//   subtitle='Card subtitle'
//   cardStyle={styles}
// />