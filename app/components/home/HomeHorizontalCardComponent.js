import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';

import HomeHorizontalCardImageComponent from './HomeHorizontalCardImageComponent';
import HomeHorizontalCardInfoComponent from './HomeHorizontalCardInfoComponent';
import { cardElevation, cardBorderRadius } from '../../constants/component_constant';

const HomeHorizontalCardComponent = (props) => {
  return (
    <Card mode="elevated" elevation={cardElevation} style={[styles.container, props.containerStyle]}
      onPress={() => console.log('on press card ===')}
    >
      <View style={{flexDirection: 'row'}}>
        <HomeHorizontalCardImageComponent />
        <HomeHorizontalCardInfoComponent />
      </View>
    </Card>
  )
}

const styles = StyleSheet.create({
  container: {
    borderRadius: cardBorderRadius,
    flexDirection: 'row',
    height: 120,
    paddingLeft: 12,
    paddingRight: 4,
  }
});

export default HomeHorizontalCardComponent;