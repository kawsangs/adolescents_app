import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {getStyleOfDevice} from '../../../utils/responsive_util';

const TiltedCardImageComponent = (props) => {
  return <View style={{height: 45}}>
            <Image source={props.image} style={styles.image} resizeMode='contain' />
         </View>
}

const styles = StyleSheet.create({
  image: {
    height: getStyleOfDevice(115, 90),
    width: '75%',
    top: getStyleOfDevice(-65, -44),
    alignSelf: 'center',
    zIndex: 1,
  }
});

export default TiltedCardImageComponent;