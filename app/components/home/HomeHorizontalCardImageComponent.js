import React from 'react';
import { ImageBackground, Image, View, Text, StyleSheet } from 'react-native';

import { cardBorderRadius } from '../../constants/component_constant';

const HomeHorizontalCardImageComponent = (props) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={props.image} resizeMode='cover'
        style={styles.image} imageStyle={{borderRadius: cardBorderRadius}}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 120,
    position: 'relative',
  },
  image: {
    borderRadius: cardBorderRadius,
    elevation: 4,
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: -16,
  }
});

export default HomeHorizontalCardImageComponent;