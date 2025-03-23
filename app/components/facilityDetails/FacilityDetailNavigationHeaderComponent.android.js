import React from 'react';
import {Animated, StyleSheet} from 'react-native';
import { Appbar } from 'react-native-paper';
import { useSelector } from 'react-redux';

import NavigationHeaderBackButtonComponent from '../shared/NavigationHeaderBackButtonComponent';
import NavigationHeaderTitleComponent from '../shared/navigationHeaders/NavigationHeaderTitleComponent';
import color from '../../themes/color';
import Facility from '../../models/Facility';
import {navigationHeaderHorizontalPadding} from '../../constants/component_constant';
import {navigationRef} from '../../navigators/app_navigator';

const scrollDistant = 100;

const FacilityDetailNavigationHeaderComponent = (props) => {
  const appTheme = useSelector(state => state.appTheme.value);
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

  let backBtnBackground = props.scrollY.interpolate({
    inputRange: [0, scrollDistant],
    outputRange: ['rgba(0, 0, 0, 0.4)', 'rgba(0, 0, 0, 0)'],
    extrapolate: "clamp"
  });

  return (
    <Animated.View style={[styles.container, {elevation: headerElevation}]}>
      <Animated.View style={[styles.background, {opacity: headerOpacity, backgroundColor: appTheme.primary_color ?? color.primaryColor}]}/>
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
    paddingHorizontal: navigationHeaderHorizontalPadding,
    elevation: 0
  },
  background: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    zIndex: 0, 
  }
});

export default FacilityDetailNavigationHeaderComponent;