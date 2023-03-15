import React from 'react';
import { ImageBackground, View, Text, Image, StyleSheet } from 'react-native';

import { cardBorderRadius } from '../../../constants/component_constant';
import { getStyleOfDevice } from '../../../utils/responsive_util';
import tabletStyles from '../../../assets/stylesheets/tablet/horizontalCardImageComponentStyles';
import mobileStyles from '../../../assets/stylesheets/mobile/horizontalCardImageComponentStyles';

const styles = getStyleOfDevice(tabletStyles, mobileStyles);

const HorizontalCardImageComponent = (props) => {
  return (
    <View style={styles.container}>
      <View style={sts.imageContainer}>
        {/* <ImageBackground source={props.image} resizeMode='contain'
          style={styles.image} imageStyle={{borderRadius: cardBorderRadius}}
        /> */}
        <Image source={props.image} resizeMode='center'
          style={styles.image} imageStyle={{borderRadius: cardBorderRadius}}
        />
      </View>
    </View>
  )
}

const sts = StyleSheet.create({
  imageContainer: {
    // borderRadius: cardBorderRadius,
    // elevation: 6,
    width: 105,
    height: 110,
    marginTop: 12,
    // position: 'absolute',
    // top: -16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  }
})

export default HorizontalCardImageComponent;