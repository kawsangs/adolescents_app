import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {Card} from 'react-native-paper';

import ClinicCardInfoComponent from './ClinicCardInfoComponent';
import { cardElevation, cardBorderRadius } from '../../constants/component_constant';

const ClinicCardItemComponent = (props) => {
  const renderImage = () => {
    return (
      <View style={{flex: 2}}>
        <Image source={require('../../assets/images/intro_1.jpg')} style={styles.image} resizeMode='cover' />
      </View>
    )
  }

  const renderInfo = () => {
    return <ClinicCardInfoComponent/>
  }

  return (
    <Card mode="elevated" elevation={cardElevation} style={[styles.container]}
      onPress={() => console.log('on press card ===')}
    >
      <View style={{flexDirection: 'row'}}>
        { renderImage() }
        { renderInfo() }
      </View>
    </Card>
  )
}

const styles = StyleSheet.create({
  container: {
    borderRadius: cardBorderRadius,
    height: 180
  },
  image: {
    borderTopLeftRadius: cardBorderRadius,
    borderBottomLeftRadius: cardBorderRadius,
    width: '100%',
    height: '100%',
  },
});

export default ClinicCardItemComponent;