import React, {useState} from 'react';
import { Animated, View, ScrollView, StyleSheet } from 'react-native';

import BoldLabelComponent from './BoldLabelComponent';
import ScrollViewHeaderComponent from './scrollViewWithAudios/ScrollViewHeaderComponent';
import HtmlDescriptionComponent from './HtmlDescriptionComponent';
import SourceLinksComponent from './SourceLinksComponent';
import FacilityHorizontalListComponent from './FacilityHorizontalListComponent';
import color from '../../themes/color';
import {scrollViewPaddingBottom} from '../../constants/component_constant';
import {headerWithAudioMaxHeight} from '../../constants/ios_component_constant';
import categoryHelper from '../../helpers/category_helper';

const ScrollViewWithAudioComponent = (props) => {
  const scrollY = new Animated.Value(0);
  const [textSize, setTextSize] = useState(props.defaultTextSize);

  const renderContent = () => {
    return (
      <View style={styles.scrollViewContent}>
        <BoldLabelComponent label={props.title} style={{color: color.blackColor, fontSize: parseFloat(textSize) + 2, marginTop: 14, lineHeight: 30, marginBottom: 10}} />
        <HtmlDescriptionComponent source={props.description} textSize={textSize} />
        { props.sources.length > 0 && <SourceLinksComponent sources={props.sources} textSize={textSize} /> }
        <FacilityHorizontalListComponent facilities={categoryHelper.getFacilitiesByTagList(props.tagList)} />
      </View>
    )
  }

  return (
    <View style={{flexGrow: 1}}>
      <ScrollViewHeaderComponent title={props.title} image={props.image} audio={props.audio} uuid={props.uuid} scrollY={scrollY} textSize={textSize} updateTextSize={(textSize) => setTextSize(textSize)} />
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