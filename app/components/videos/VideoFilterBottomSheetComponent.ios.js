import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Text, Divider} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Feather';

import BottomSheetModalMainComponent from '../shared/BottomSheetModalMainComponent';
import BoldLabelComponent from '../shared/BoldLabelComponent';
import color from '../../themes/color';
import componentUtil from '../../utils/component_util';
import {mediumFontSize} from '../../utils/font_size_util';
import {screenHorizontalPadding} from '../../constants/component_constant';
import {bottomSheetTitleFontSize, itemFontSize} from '../../constants/bottom_sheet_picker_constant';
import {videoFilterContentHeight} from '../../constants/modal_constant';
import VideoAuthor from '../../models/VideoAuthor';

import {useDispatch, useSelector} from 'react-redux';
import {storeSelectedVidAuthor, resetSelectedVidAuthor} from '../../features/videos/filterVideoAuthorSlice';

const VideoFilterBottomSheetComponent = (props) => {
  const dispatch = useDispatch();
  const selectedVidAuthor = useSelector(state => state.filterVideoAuthor);
  const onSelect = (author) => {
    props.closeBottomSheet()
    if (selectedVidAuthor.uuid == author.uuid)
      return dispatch(resetSelectedVidAuthor())

    dispatch(storeSelectedVidAuthor({uuid: author.uuid}))
  }

  const renderListItem = () => {
    const authors = VideoAuthor.getAll()
    return authors.map((author, index) => {
      return (
        <View key={author.uuid}>
          <TouchableOpacity style={styles.container} onPress={() => onSelect(author)}>
            <Text style={styles.label} numberOfLines={2}>{author.name}</Text>
            {(selectedVidAuthor.uuid == author.uuid) && <Icon name='check' size={24} color={color.secondaryColor} />}
          </TouchableOpacity>
          {index < authors.length - 1 && <Divider style={{backgroundColor: color.lightGrayColor}}/> }
        </View>
      )
    })
  }

  const bottomSheetTitle = () => {
    return <View style={{paddingHorizontal: screenHorizontalPadding, paddingBottom: 16}}>
              <BoldLabelComponent label='ស្វែងរកវីដេអូ' style={{fontSize: bottomSheetTitleFontSize}} />
              <Text style={{fontSize: mediumFontSize(), color: color.grayColor}}>ច្រោះតាមរយៈអ្នកផលិត</Text>
           </View>
  }

  return (
    <BottomSheetModalMainComponent
      customTitle={bottomSheetTitle()}
      containerStyle={{height: videoFilterContentHeight}}
      scrollViewStyle={{paddingTop: 0, paddingBottom: 18}}
    >
      {renderListItem()}
    </BottomSheetModalMainComponent>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    height: componentUtil.tabletPressableItemSize(),
  },
  label: {
    fontSize: itemFontSize,
    flex: 1
  }
});

export default VideoFilterBottomSheetComponent