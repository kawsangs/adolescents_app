import React, {useState, useRef} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Text} from 'react-native-paper';
import { useSelector } from 'react-redux';

import CustomFlatListComponent from '../CustomFlatListComponent';
import color from '../../../themes/color';
import {largeFontSize} from '../../../utils/font_size_util';
import componentUtil from '../../../utils/component_util';
import {isLowPixelDensityDevice, getStyleOfDevice} from '../../../utils/responsive_util';
import TagSyncService from '../../../services/tag_sync_service';
import {screenHorizontalPadding} from '../../../constants/component_constant';

const TagScrollBarComponent = (props) => {
  const listRef = useRef();
  const [selectedUuid, setSelectedUuid] = useState(null);
  const appTheme = useSelector(state => state.appTheme.value);
  let synced = false;

  const toggleFilter = (tag) => {
    const tagUuid = selectedUuid == tag.uuid ? null : tag.uuid;
    !!props.onToggleFilter && props.onToggleFilter(tagUuid);
    setSelectedUuid(tagUuid);
  }

  const renderItem = (tag) => {
    const colors = {
      text: appTheme.primary_color ?? color.primaryColor,
      selectedText: appTheme.primary_text_color ?? color.whiteColor,
      background: appTheme.primary_text_color ?? color.whiteColor,
      selectedBackground: appTheme.secondary_color ?? color.secondaryColor
    };
    return <TouchableOpacity style={[styles.item, {backgroundColor: selectedUuid == tag.uuid ? colors.selectedBackground : colors.background}]}
              onPress={() => toggleFilter(tag)}
           >
              <Text style={[styles.label, {color: selectedUuid == tag.uuid ? colors.selectedText : colors.text}]}>{tag.name}</Text>
           </TouchableOpacity>
  }

  const onEndReached = () => {
    if (synced)
      return listRef.current?.stopPaginateLoading()

    new TagSyncService(props.type).syncAllData((newTags) => {
      synced = true;
      listRef.current?.stopPaginateLoading();
    }, () => listRef.current?.stopPaginateLoading())
  }

  return <View style={[{paddingLeft: screenHorizontalPadding, justifyContent: 'center', height: getStyleOfDevice(78, isLowPixelDensityDevice() ? 54 : 68)}, props.containerStyle]}>
            <CustomFlatListComponent
              ref={listRef}
              data={props.tags}
              renderItem={({item}) => renderItem(item)}
              keyExtractor={item => item.uuid}
              horizontal={true}
              hasInternet={props.hasInternet}
              showsHorizontalScrollIndicator={false}
              isSmallLoading={true}
              customContentContainerStyle={[{flexDirection: 'row', paddingRight: 4, alignItems: 'center'}, props.contentContainerStyle]}
              endReachedAction={() => onEndReached()}
            />
         </View>
}

const styles = StyleSheet.create({
  item: {
    alignItems: 'center',
    borderRadius: getStyleOfDevice(35, 25),
    height: getStyleOfDevice(componentUtil.tabletPressableItemSize(), isLowPixelDensityDevice() ? 40 : componentUtil.pressableItemSize()),
    justifyContent: 'center',
    marginRight: 12,
    minWidth: 60,
    paddingHorizontal: 12,
    paddingTop: 4
  },
  label: {
    fontSize: largeFontSize(),
    lineHeight: getStyleOfDevice(28, 26)
  }
});

export default TagScrollBarComponent;