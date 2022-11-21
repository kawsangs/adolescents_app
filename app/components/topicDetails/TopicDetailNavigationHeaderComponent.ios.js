import React, {useState} from 'react';
import {Animated, StyleSheet} from 'react-native';
import { Appbar } from 'react-native-paper';

import NavigationHeaderBackButtonComponent from '../shared/NavigationHeaderBackButtonComponent';
import NavigationHeaderTitleComponent from '../shared/navigationHeaders/NavigationHeaderTitleComponent';
import TopicDetailFullTitleComponent from './TopicDetailFullTitleComponent';
import color from '../../themes/color';
import {navigationHeaderHorizontalPadding, cardBorderRadius} from '../../constants/component_constant';

const TopicDetailNavigationHeaderComponent = (props) => {
  const [headerHeight, setHeaderHeight] = useState(56);

  const headerOpacity = props.scrollY.interpolate({
    inputRange: [0, headerHeight],
    outputRange: [0, 1],
    extrapolate: "identity"
  });

  const containerHeight = props.scrollY.interpolate({
    inputRange: [0, headerHeight],
    outputRange: [headerHeight, 56],
    extrapolate: "clamp"
  });

  const headerMargin = props.scrollY.interpolate({
    inputRange: [0, headerHeight],
    outputRange: [16, 0],
    extrapolate: "clamp"
  })

  const iconColor = props.scrollY.interpolate({
    inputRange: [0, headerHeight],
    outputRange: [color.primaryColor, color.whiteColor],
    extrapolate: "clamp"
  })

  return (
    <Animated.View style={[styles.container, {marginHorizontal: headerMargin, marginTop: headerMargin, height: containerHeight}]}>
      <Animated.View style={[styles.background, {opacity: headerOpacity}]}/>

      <Appbar.Header style={[styles.header]}>
        <NavigationHeaderBackButtonComponent iconStyle={{marginLeft: 2, color: iconColor}}/>
        <Animated.View style={{flex: 1, paddingLeft: 8, opacity: headerOpacity}}>
          <NavigationHeaderTitleComponent label={props.label} />
        </Animated.View>
      </Appbar.Header>

      <TopicDetailFullTitleComponent label={props.label} scrollY={props.scrollY} headerHeight={headerHeight}
        updateHeaderHeight={(height) => setHeaderHeight(height + 56)}
      />
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  container: {
    zIndex: 1,
    backgroundColor: 'white',
    marginHorizontal: 16,
    marginTop: 16,
    borderRadius: cardBorderRadius
  },
  header: {
    backgroundColor: "transparent",
    paddingHorizontal: navigationHeaderHorizontalPadding,
  },
  background: {
    backgroundColor: color.primaryColor,
    position: 'absolute',
    height: '100%',
    width: '100%',
    zIndex: 0, 
  },
});

export default TopicDetailNavigationHeaderComponent;