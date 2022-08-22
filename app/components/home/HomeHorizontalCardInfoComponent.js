import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import BoldLabelComponent from '../shared/BoldLabelComponent';
import color from '../../themes/color';
import componentUtil from '../../utils/component_util';
import { normalFontSize } from '../../utils/font_size_util';

const HomeHorizontalCardInfoComponent = (props) => {
  return (
    <View style={styles.container}>
      <View style={{flex: 1, paddingVertical: 8}}>
        <BoldLabelComponent label={props.title} style={{ fontSize: normalFontSize() }} />
      </View>

      <View style={styles.subtitleContainer}>
        <Text style={styles.subtitle}>{props.points} ចំនុច</Text>
        <TouchableOpacity style={styles.btnPlay}>
          <Icon name="volume-medium-outline" size={30} color={color.primaryColor} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    flexDirection: 'column',
    paddingLeft: 8
  },
  subtitleContainer: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
  },
  subtitle: {
    flex: 1,
    fontSize: normalFontSize(),
  },
  btnPlay: {
    alignItems: 'flex-end',
    height: componentUtil.pressableItemSize(),
    justifyContent: 'center',
    alignItems: 'center',
    width: componentUtil.pressableItemSize(),
  }
});

export default HomeHorizontalCardInfoComponent;