import React from 'react';
import { ImageBackground, View } from 'react-native';

import { cardBorderRadius } from '../../constants/component_constant';
import { getStyleOfDevice } from '../../utils/responsive_util';
import tabletStyles from '../../assets/stylesheets/tablet/homeHorizontalCardImageComponentStyles';
import mobileStyles from '../../assets/stylesheets/mobile/homeHorizontalCardImageComponentStyles';

const styles = getStyleOfDevice(tabletStyles, mobileStyles);

const HomeHorizontalCardImageComponent = (props) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={props.image} resizeMode='cover'
        style={styles.image} imageStyle={{borderRadius: cardBorderRadius}}
      />
    </View>
  )
}

export default HomeHorizontalCardImageComponent;