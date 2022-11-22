import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {getStyleOfDevice} from '../../../utils/responsive_util';

const TiltedCardImageComponent = (props) => {
  return <View style={{flex: 2}}>
            <Image source={props.image} style={styles.image} resizeMode='contain' />
         </View>
}

const styles = StyleSheet.create({
  image: {
    height: getStyleOfDevice(145, 115),
    width: '90%',
    top: getStyleOfDevice(-75, -46),
    zIndex: 1,
  }
});

export default TiltedCardImageComponent;