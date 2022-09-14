import React from 'react';
import { Animated, View, ScrollView, StyleSheet } from 'react-native';
import {Text} from 'react-native-paper';

import BoldLabelComponent from './BoldLabelComponent';
import ScrollViewHeaderComponent from './scrollViewWithAudios/ScrollViewHeaderComponent';
import color from '../../themes/color';
import { headerWithAudioMaxHeight, scrollViewPaddingBottom, descriptionLineHeight } from '../../constants/component_constant';
import {xxLargeFontSize, largeFontSize} from '../../utils/font_size_util';

const ScrollViewWithAudioComponent = (props) => {
  const scrollY = new Animated.Value(0);
  const renderContent = () => {
    return (
      <View style={styles.scrollViewContent}>
        <BoldLabelComponent label={props.title} style={{color: color.blackColor, fontSize: xxLargeFontSize(), marginTop: 14, lineHeight: 30}} />
        <Text style={{fontSize: largeFontSize(), marginTop: 16, color: color.descriptionTextColor, lineHeight: descriptionLineHeight}}>
          {props.description}
        </Text>
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
  row: {
    height: 40,
    margin: 16,
    backgroundColor: '#D3D3D3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollViewContent: {
    marginTop: headerWithAudioMaxHeight,
    paddingHorizontal: 24,
    paddingBottom: scrollViewPaddingBottom,
  }
});

export default ScrollViewWithAudioComponent;