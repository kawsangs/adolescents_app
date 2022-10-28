import React from 'react';
import { Animated, View, ScrollView, StyleSheet } from 'react-native';
import {Text} from 'react-native-paper';
import HTML from 'react-native-render-html';

import BoldLabelComponent from './BoldLabelComponent';
import ScrollViewHeaderComponent from './scrollViewWithAudios/ScrollViewHeaderComponent';
import HtmlDescriptionComponent from './HtmlDescriptionComponent';
import color from '../../themes/color';
import { headerWithAudioMaxHeight, scrollViewPaddingBottom, descriptionLineHeight } from '../../constants/component_constant';
import {xxLargeFontSize} from '../../utils/font_size_util';

const ScrollViewWithAudioComponent = (props) => {
  const scrollY = new Animated.Value(0);
  const renderContent = () => {
    return (
      <View style={styles.scrollViewContent}>
        <BoldLabelComponent label={props.title} style={{color: color.blackColor, fontSize: xxLargeFontSize(), marginTop: 14, marginBottom: 16, lineHeight: 30}} />
        <HtmlDescriptionComponent source={props.description} />
      </View>
    )
  }

  return (
    <View style={{flexGrow: 1}}>
      <ScrollViewHeaderComponent title={props.title} image={props.image} audio={props.audio} scrollY={scrollY} />
      <ScrollView style={{flexGrow: 1, backgroundColor: color.whiteColor}} scrollEventThrottle={16}
        onScroll={Animated.event([{nativeEvent: {contentOffset: {y: scrollY}}}], { useNativeDriver: false })}
      >
        { renderContent() }
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  scrollViewContent: {
    backgroundColor: color.whiteColor,
    marginTop: headerWithAudioMaxHeight,
    paddingHorizontal: 24,
    paddingBottom: scrollViewPaddingBottom,
  }
});

export default ScrollViewWithAudioComponent;