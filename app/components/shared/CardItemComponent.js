import React from 'react';
import { View, StyleSheet } from 'react-native';

import CardItemImageComponent from './cardItem/CardItemImageComponent';
import color from '../../themes/color';
import cardStyle from '../../assets/stylesheets/shared/cardStyle';
import { cardBorderRadius } from '../../constants/component_constant';
import CardItemInfoComponent from './cardItem/CardItemInfoComponent';

const CardComponent = () => {
  return (
    <View style={[styles.card, cardStyle.cardShadow]}>
      <CardItemImageComponent imageSource={require('../../assets/images/android_landscape.jpeg')} />
      <CardItemInfoComponent title='Title of item 1' />
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: color.whiteColor,
    width: '100%',
    height: 255,
    borderRadius: cardBorderRadius,
  }
});

export default CardComponent;