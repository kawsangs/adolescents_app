import React from 'react';
import {ScrollView, StyleSheet, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import color from '../../themes/color';
import {screenHorizontalPadding, scrollViewPaddingBottom} from '../../constants/component_constant';

const GradientBackgroundComponent = (props) => {
  return (
    <LinearGradient
      colors={[color.primaryColor, 'rgba(170, 73, 133, 0.88)']}
      start={{x: 0, y: 0}} end={{x: 1, y: 1}}
      style={{flex: 1, width: '100%'}}
    >
      {props.header}

      <ScrollView contentContainerStyle={[styles.scrollView, props.scrollViewStyle]}
        scrollEnabled={props.scrollable ?? true}
      >
        {props.body}
      </ScrollView>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
    paddingHorizontal: screenHorizontalPadding,
    paddingBottom: scrollViewPaddingBottom
  }
});

export default GradientBackgroundComponent;