import React from 'react';
import { Animated, View, ScrollView, Text, StyleSheet } from 'react-native';

import color from '../../themes/color';
import ScrollViewWithAudioHeaderComponent from './ScrollViewWithAudioHeaderComponent';
import { headerWithAudioMaxHeight } from '../../constants/component_constant';

const ScrollViewWithAudioComponent = (props) => {
  const scrollY = new Animated.Value(0);

  const renderScrollViewContent = () => {
    const data = Array.from({length: 30});
    return (
      <View style={styles.scrollViewContent}>
        {data.map((_, i) =>
          <View key={i} style={styles.row}>
            <Text>{i}</Text>
          </View>
        )}
      </View>
    );
  }

  return (
    <View style={{flex: 1}}>
      <ScrollViewWithAudioHeaderComponent title={props.title} scrollY={scrollY} />
      <ScrollView style={{flex: 1, backgroundColor: color.whiteColor}} scrollEventThrottle={16}
        onScroll={Animated.event([{nativeEvent: {contentOffset: {y: scrollY}}}], { useNativeDriver: false })}
      >
        { renderScrollViewContent() }
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
    marginTop: headerWithAudioMaxHeight
  }
});

export default ScrollViewWithAudioComponent;