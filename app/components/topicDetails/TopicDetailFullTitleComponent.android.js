import React from 'react';
import {Animated, StyleSheet} from 'react-native';

import BoldLabelComponent from '../shared/BoldLabelComponent';
import color from '../../themes/color';
import {xxLargeFontSize} from '../../utils/font_size_util';

const TopicDetailFullTitleComponent = (props) => {
  const titleOpacity = props.scrollY.interpolate({
    inputRange: [0, props.headerHeight],
    outputRange: [1, 0],
    extrapolate: "clamp"
  });

  return (
    <Animated.View style={{paddingHorizontal: 16, opacity: titleOpacity}}
      onLayout={(event) => props.updateHeaderHeight(event.nativeEvent.layout.height)}
    >
      <BoldLabelComponent label={props.label} style={styles.label} />
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  label: {
    color: color.blackColor,
    fontSize: xxLargeFontSize(),
    lineHeight: 30,
    marginBottom: 16,
    textTransform: 'capitalize',
  }
});

export default TopicDetailFullTitleComponent;