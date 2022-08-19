import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import color from '../../themes/color';
import componentUtil from '../../utils/component_util';

const HomeHorizontalCardInfoComponent = () => {
  return (
    <View style={styles.container}>
      <View style={{flex: 1, paddingVertical: 8}}>
        <Text>ការអប់រំពីសុខភាពផ្លូវចិត្ត និងសុខភាពផ្លូវភេទ</Text>
      </View>

      <View style={styles.subtitleContainer}>
        <Text style={{flex: 1, borderWidth: 1}}>7 ចំនុច</Text>
        <TouchableOpacity style={styles.btnPlay}>
          <Icon name="volume-medium-outline" size={30} color={color.primaryColor} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // borderWidth: 1,
    flex: 2,
    flexDirection: 'column',
  },
  subtitleContainer: {
    alignItems: 'center',
    borderColor: 'blue',
    // borderWidth: 1,
    flex: 1,
    flexDirection: 'row',
  },
  btnPlay: {
    alignItems: 'flex-end',
    borderWidth: 1,
    height: componentUtil.pressableItemSize(),
    justifyContent: 'center',
    width: componentUtil.pressableItemSize(),
  }
});

export default HomeHorizontalCardInfoComponent;