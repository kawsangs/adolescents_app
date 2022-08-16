import React from 'react';
import { Animated, View, ScrollView, Text, StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';

import color from '../../themes/color';
import AudioControlComponent from '../audioControls/audioControlComponent';

const HEADER_MAX_HEIGHT = 320;
const HEADER_MIN_HEIGHT = 160;
const HEADER_SCROLL_DISTANCE = (HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT);

const AnimatedScrollViewComponent = () => {
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

  const headerHeight = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
    extrapolate: 'clamp',
  });

  const audioControlScale = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [1, 0.8],
    extrapolate: 'clamp',
  });

  const audioControlMarginTop = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [40, 20],
    extrapolate: 'clamp'
  });

  const iconSize = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [60, 30],
    extrapolate: 'clamp'
  });

  return (
    <View style={{flex: 1, borderWidth: 1}}>
      <ScrollView style={{flex: 1}}
        scrollEventThrottle={16}
        onScroll={Animated.event([{nativeEvent: {contentOffset: {y: scrollY}}}], { useNativeDriver: false })}
      >
        <Text>ScrollView</Text>
        { renderScrollViewContent() }
      </ScrollView>

      <Animated.View style={[styles.header, { height: headerHeight, paddingBottom: 10 }]}>
        <Animated.View>
          <Appbar.Header style={{backgroundColor: color.primaryColor, elevation: 0}}>
            <Appbar.BackAction />
            <Appbar.Content title="Title" />
          </Appbar.Header>
        </Animated.View>

        <AudioControlComponent
          audioControlScale={audioControlScale}
          audioControlMarginTop={audioControlMarginTop}
          iconSize={iconSize}
        />
      </Animated.View>
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
    marginTop: HEADER_MAX_HEIGHT,
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: color.primaryColor,
    overflow: 'hidden',
  },
  title: {
    backgroundColor: 'transparent',
    color: 'black',
    fontSize: 18,
  },
});

export default AnimatedScrollViewComponent;