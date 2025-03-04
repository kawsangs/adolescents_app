import React from 'react';
import {Animated, StyleSheet, View} from 'react-native';
import { Appbar } from 'react-native-paper';

import NavigationHeaderBackButtonComponent from '../shared/NavigationHeaderBackButtonComponent';
import NavigationHeaderTitleComponent from '../shared/navigationHeaders/NavigationHeaderTitleComponent';
import color from '../../themes/color';
import Facility from '../../models/Facility';
import {navigationHeaderHorizontalPadding} from '../../constants/component_constant';
import {navigationRef} from '../../navigators/app_navigator';

const scrollDistant = 100;

const FacilityDetailNavigationHeaderComponent = (props) => {
  const headerOpacity = props.scrollY.interpolate({
    inputRange: [0, scrollDistant],
    outputRange: [0, 1],
    extrapolate: "identity"
  });

  let backBtnBackground = props.scrollY.interpolate({
    inputRange: [0, scrollDistant],
    outputRange: ['rgba(0, 0, 0, 0.4)', 'rgba(0, 0, 0, 0)'],
    extrapolate: "clamp"
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.background, {opacity: headerOpacity}]}/>
      <Appbar.Header style={[styles.header]}>
        <Animated.View style={{backgroundColor: backBtnBackground, borderRadius: 50, height: 48, justifyContent: 'center', alignItems: 'center'}}>
          <NavigationHeaderBackButtonComponent iconStyle={{marginLeft: 2}} onPress={() => {
            if (props.isFromCategoryDetail != undefined && !props.isFromCategoryDetail)
              navigationRef.current?.goBack()

            navigationRef.current?.goBack()
          }}/>
        </Animated.View>
        <Animated.View style={{flex: 1, paddingLeft: 8, opacity: headerOpacity}}>
          <NavigationHeaderTitleComponent label={Facility.findByUuid(props.uuid).name} />
        </Animated.View>
      </Appbar.Header>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    width: "100%",
    zIndex: 1,
  },
  header: {
    backgroundColor: "transparent",
    paddingHorizontal: navigationHeaderHorizontalPadding,
    elevation: 1,
    zIndex: 1,
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