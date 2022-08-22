import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import BoldLabelComponent from '../shared/BoldLabelComponent';
import AudioButtonComponent from '../shared/AudioButtonComponent';
import color from '../../themes/color';
import { normalFontSize, smallFontSize } from '../../utils/font_size_util';

const HomeHorizontalCardInfoComponent = (props) => {
  return (
    <View style={styles.container}>
      <View style={{flex: 1, paddingVertical: 8}}>
        <BoldLabelComponent label={props.title} style={{ fontSize: normalFontSize() }} />
      </View>

      <View style={styles.subtitleContainer}>
        <Text style={styles.subtitle}>{props.points} ចំនុច</Text>
        <AudioButtonComponent hasAudio={props.hasAudio} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    flexDirection: 'column',
    paddingLeft: 8,
  },
  subtitleContainer: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
  },
  subtitle: {
    color: color.blackColor,
    flex: 1,
    fontSize: smallFontSize(),
  },
});

export default HomeHorizontalCardInfoComponent;