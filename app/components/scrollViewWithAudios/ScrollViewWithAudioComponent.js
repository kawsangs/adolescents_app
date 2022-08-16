import React from 'react';
import { Animated, View, ScrollView, Text, StyleSheet } from 'react-native';

import ScrollViewWithAudioHeaderComponent from './ScrollViewWithAudioHeaderComponent';

const HEADER_MAX_HEIGHT = 320;
const HEADER_MIN_HEIGHT = 160;
const HEADER_SCROLL_DISTANCE = (HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT);

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
      <ScrollView style={{flex: 1}}
        scrollEventThrottle={16}
        onScroll={Animated.event([{nativeEvent: {contentOffset: {y: scrollY}}}], { useNativeDriver: false })}
      >
        { renderScrollViewContent() }
      </ScrollView>

      <ScrollViewWithAudioHeaderComponent
        title={props.title}
        scrollY={scrollY}
        headerScrollDistance={HEADER_SCROLL_DISTANCE}
        headerMaxheight={HEADER_MAX_HEIGHT}
        headerMinHeight={HEADER_MIN_HEIGHT}
      />
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
});

export default ScrollViewWithAudioComponent;