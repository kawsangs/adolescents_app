import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';

import color from '../../themes/color';

const IntroItemComponent = (props) => {
  return (
    <View style={styles.slide}>
      <Image source={props.image} style={styles.image} resizeMode='contain' />
      <Text style={styles.title}>{props.title}</Text>
      <Text style={styles.text}>{props.description}</Text>
    </View>
  );
}

const screenHeight = Dimensions.get('screen').height;

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: color.whiteColor,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: color.blackColor,
  },
  text: {
    fontSize: 16,
    color: color.lightBlackColor,
    marginTop: 36,
  },
  image: {
    width: '70%',
    height: 290,
    marginBottom: 30,
    marginTop: -(screenHeight / 8)
  }
});

export default IntroItemComponent;