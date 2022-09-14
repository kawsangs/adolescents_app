import React from 'react';
import { ImageBackground, View, Text } from 'react-native';

import { cardBorderRadius } from '../../../constants/component_constant';
import { getStyleOfDevice } from '../../../utils/responsive_util';
import tabletStyles from '../../../assets/stylesheets/tablet/horizontalCardImageComponentStyles';
import mobileStyles from '../../../assets/stylesheets/mobile/horizontalCardImageComponentStyles';

const styles = getStyleOfDevice(tabletStyles, mobileStyles);

const HorizontalCardImageComponent = (props) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={props.image} resizeMode='cover'
        style={styles.image} imageStyle={{borderRadius: cardBorderRadius}}
      />
    </View>
  )
}

export default HorizontalCardImageComponent;