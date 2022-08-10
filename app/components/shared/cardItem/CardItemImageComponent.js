import React from 'react';
import { Image, StyleSheet } from 'react-native';

import { cardBorderRadius } from '../../../constants/component_constant';

const CardItemImageComponent = (props) => {
  return <Image source={props.imageSource} style={styles.image}
            resizeMode='cover'
         />
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 135,
    borderTopLeftRadius: cardBorderRadius,
    borderTopRightRadius: cardBorderRadius,
  }
});

export default CardItemImageComponent;