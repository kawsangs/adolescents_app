import React from 'react';
import { ImageBackground, Image, View, Text, StyleSheet } from 'react-native';

import { cardBorderRadius } from '../../constants/component_constant';

const HomeHorizontalCardImageComponent = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground source={props.image} resizeMode='cover'
        style={styles.image} imageStyle={{borderRadius: cardBorderRadius}}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    borderRadius: cardBorderRadius,
    elevation: 6,
    width: '100%',
    height: '103%',
    position: 'absolute',
    top: -16,
  }
});

export default HomeHorizontalCardImageComponent;