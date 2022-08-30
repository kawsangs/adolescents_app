import React from 'react';
import { Animated, View, ScrollView, Text, StyleSheet } from 'react-native';

import color from '../../themes/color';
import ScrollViewHeaderComponent from './scrollViewWithAudios/ScrollViewHeaderComponent';
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
    <View style={{flexGrow: 1}}>
      <ScrollViewHeaderComponent title={props.title} scrollY={scrollY} />
      <ScrollView style={{flexGrow: 1, backgroundColor: color.whiteColor}} scrollEventThrottle={16}
        onScroll={Animated.event([{nativeEvent: {contentOffset: {y: scrollY}}}], { useNativeDriver: false })}
      >
        { renderScrollViewContent() }
        <Text>Listitemsldfajsdlfkj</Text>
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