import React from 'react';
import {View, StyleSheet, Image} from 'react-native';

const SquareCardImageComponent = (props) => {
  return <View style={{flex: 2}}>
            <Image source={props.image} style={styles.image} resizeMode='contain' />
         </View>
}

const styles = StyleSheet.create({
  image: {
    height: 115,
    width: '90%',
    top: -46,
    zIndex: 1,
    borderColor: 'black',

  }
});

export default SquareCardImageComponent;