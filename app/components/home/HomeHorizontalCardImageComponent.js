import React from 'react';
import { ImageBackground, Image, View, Text, StyleSheet } from 'react-native';

import { cardBorderRadius } from '../../constants/component_constant';

const HomeHorizontalCardImageComponent = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../assets/images/intro_1.jpg')} resizeMode='cover'
        style={styles.image} imageStyle={{borderRadius: cardBorderRadius}}
      />
      
      {/* <View style={styles.imageContainer}>
        <Image source={require('../../assets/images/intro_1.jpg')} style={styles.image} resizeMode='cover' />
      </View> */}
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