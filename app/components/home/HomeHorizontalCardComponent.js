import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';

import HomeHorizontalCardImageComponent from './HomeHorizontalCardImageComponent';
import HomeHorizontalCardInfoComponent from './HomeHorizontalCardInfoComponent';
import { cardElevation } from '../../constants/component_constant';

const HomeHorizontalCardComponent = (props) => {
  return (
    <TouchableOpacity style={[styles.container, props.containerStyle]}>
      <HomeHorizontalCardImageComponent />

      <HomeHorizontalCardInfoComponent />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    elevation: cardElevation,
    flexDirection: 'row',
    height: 120,
    // paddingHorizontal: 12,
    paddingLeft: 12
  }
});

export default HomeHorizontalCardComponent;