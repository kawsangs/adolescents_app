import React from 'react';
import { Animated, StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';

import NavigationHeaderBackButtonComponent from '../NavigationHeaderBackButtonComponent';
import NavigationHeaderTitleComponent from '../navigationHeaders/NavigationHeaderTitleComponent';
import {headerWithAudioScrollDistance} from '../../../constants/component_constant';

const HeaderNavigationComponent = (props) => {
  const titleOpacity = props.scrollY.interpolate({
    inputRange: [0, headerWithAudioScrollDistance],
    outputRange: [0, 1],
    extrapolate: 'extend'
  });

  return (
    <Appbar.Header style={styles.container}>
      <NavigationHeaderBackButtonComponent/>
      <Animated.View style={{flex: 1, paddingLeft: 8, opacity: titleOpacity}}>
        <NavigationHeaderTitleComponent label={props.title} />
      </Animated.View>
    </Appbar.Header>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
    elevation: 0
  },
});

export default HeaderNavigationComponent;