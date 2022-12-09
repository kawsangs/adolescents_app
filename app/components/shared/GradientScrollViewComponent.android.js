import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {backgroundColors} from '../../themes/color';
import {screenHorizontalPadding, scrollViewPaddingBottom} from '../../constants/component_constant';

const GradientScrollViewComponent = (props) => {
  return (
    <LinearGradient
      colors={backgroundColors}
      start={{x: -0.7, y: 0.2}} end={{x: 1, y: 1}}
      style={{flexGrow: 1, width: '100%'}}
    >
      {props.header}

      <ScrollView contentContainerStyle={[styles.scrollView, props.scrollViewStyle]}
        nestedScrollEnabled={true}
        scrollEnabled={props.scrollable ?? true}
        onScroll={(event) => !!props.onScroll && props.onScroll(event)}
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

export default GradientScrollViewComponent;