import React from 'react';
import {Animated, StyleSheet} from 'react-native';
import { Appbar } from 'react-native-paper';

import NavigationHeaderBackButtonComponent from '../shared/NavigationHeaderBackButtonComponent';
import NavigationHeaderTitleComponent from '../shared/navigationHeaders/NavigationHeaderTitleComponent';
import color from '../../themes/color';
import {getStyleOfDevice} from '../../utils/responsive_util';

const scrollDistant = 100;

const FacilityDetailNavigationHeaderComponent = (props) => {
  const headerElevation = props.scrollY.interpolate({
    inputRange: [0, scrollDistant],
    outputRange: [0, 1],
    extrapolate: "identity"
  });
  
  const headerOpacity = props.scrollY.interpolate({
    inputRange: [0, scrollDistant],
    outputRange: [0, 1],
    extrapolate: "identity"
  });

  return (
    <Animated.View style={[styles.container, {elevation: headerElevation}]}>
      <Animated.View style={[styles.background, {opacity: headerOpacity}]}/>
      <Appbar.Header style={[styles.header]}>
        <NavigationHeaderBackButtonComponent/>
        <Animated.View style={{flex: 1, paddingLeft: 8, opacity: headerOpacity}}>
          <NavigationHeaderTitleComponent label={'Clinic detail'} />
        </Animated.View>
      </Appbar.Header>
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 56,
    position: "absolute",
    width: "100%",
    zIndex: 1
  },
  header: {
    backgroundColor: "transparent",
    paddingHorizontal: getStyleOfDevice(14, 0),
    elevation: 0
  },
  background: {
    backgroundColor: color.primaryColor,
    position: 'absolute',
    height: '100%',
    width: '100%',
    zIndex: 0, 
  }
});

export default FacilityDetailNavigationHeaderComponent;