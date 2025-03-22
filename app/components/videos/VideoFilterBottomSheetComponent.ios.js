import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Text, Divider} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useTranslation} from 'react-i18next';

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
  const {t} = useTranslation();
  const selectedVidAuthor = useSelector(state => state.filterVideoAuthor);
  const appTheme = useSelector(state => state.appTheme.value);
  const onSelect = (author) => {
    props.closeBottomSheet()
    if (selectedVidAuthor.uuid == author.uuid)
      return dispatch(resetSelectedVidAuthor())

    dispatch(storeSelectedVidAuthor({uuid: author.uuid}))
  }

  const renderLeftCheckIcon = (author) => {
    const containerStyle = {backgroundColor: appTheme.primary_color ?? color.primaryColor, borderWidth: 0};
    return <View style={[styles.roundContainer, selectedVidAuthor.uuid == author.uuid && containerStyle]}>
              { (selectedVidAuthor.uuid == author.uuid) && <Icon name='check' size={13} color={appTheme.primary_text_color ?? 'white'}/>}
           </View>
  }

  const renderListItem = () => {
    const authors = VideoAuthor.getAll()
    return authors.map((author, index) => {
      return (
        <View key={author.uuid}>
          <TouchableOpacity style={styles.container} onPress={() => onSelect(author)}>
            {renderLeftCheckIcon(author)}
            <Text style={styles.label} numberOfLines={2}>{author.name}</Text>
          </TouchableOpacity>
          {index < authors.length - 1 && <Divider style={{backgroundColor: color.lightGrayColor}}/> }
        </View>
      )
    })
  }

  const bottomSheetTitle = () => {
    return <View style={{paddingHorizontal: screenHorizontalPadding, paddingBottom: 16}}>
              <BoldLabelComponent label={t('findVideo')} style={{fontSize: bottomSheetTitleFontSize}} />
              <Text style={{fontSize: mediumFontSize(), color: color.grayColor}}>{t('filterByAuthor')}</Text>
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
  },
  roundContainer: {
    alignItems: 'center',
    alignItems: 'center',
    borderColor: '#D3D3D3',
    borderRadius: 20,
    borderWidth: 1.5,
    justifyContent: 'center',
    height: 22,
    width: 22,
    marginRight: 10,
  }
});

export default VideoFilterBottomSheetComponent