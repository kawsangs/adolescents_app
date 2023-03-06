import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Text} from 'react-native-paper';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

import BottomSheetModalMainComponent from '../shared/BottomSheetModalMainComponent';
import { contactContentHeight } from '../../constants/modal_constant';
import color from '../../themes/color';
import componentUtil from '../../utils/component_util';
import { screenHorizontalPadding, descriptionFontSize } from '../../constants/component_constant';
import VideoAuthor from '../../models/VideoAuthor';

const VideoFilterBottomSheetComponent = () => {
  const renderListItem = () => {
    const authors = VideoAuthor.getAll()
    return authors.map((author, index) => {
      return (
        <View key={author.uuid} style={{paddingHorizontal: screenHorizontalPadding}}>
          <TouchableOpacity style={styles.container} onPress={() => console.log('select author')}>
            <Text style={styles.label} numberOfLines={2}>{author.name}</Text>
          </TouchableOpacity>
          <View style={{ borderColor: '#D3D3D3', borderBottomWidth: index == authors.length -1 ? 0 : 0.6 }} />
        </View>
      )
    })
  }

  return (
    <BottomSheetModalMainComponent
      title='ជ្រើសរើសអ្នកផលិត'
      containerStyle={{height: hp(contactContentHeight)}}
      scrollViewStyle={{paddingHorizontal: 0, paddingTop: 0}}
    >
      {renderListItem()}
    </BottomSheetModalMainComponent>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    height: componentUtil.mediumPressableItemSize(),
  },
  label: {
    color: color.primaryColor,
    fontSize: descriptionFontSize,
  }
});

export default VideoFilterBottomSheetComponent