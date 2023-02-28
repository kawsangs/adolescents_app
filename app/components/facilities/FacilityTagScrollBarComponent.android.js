import React, {useState, useRef} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Text} from 'react-native-paper';

import CustomFlatListComponent from '../shared/CustomFlatListComponent';
import color from '../../themes/color';
import {largeFontSize} from '../../utils/font_size_util';
import componentUtil from '../../utils/component_util';
import {isLowPixelDensityDevice} from '../../utils/responsive_util';
import tagSyncService from '../../services/tag_sync_service';
import {screenHorizontalPadding} from '../../constants/component_constant';

const FacilityTagScrollBarComponent = (props) => {
  const listRef = useRef();
  const [selectedUuid, setSelectedUuid] = useState(null);
  let synced = false;

  const toggleFilter = (tag) => {
    const tagUuid = selectedUuid == tag.uuid ? null : tag.uuid;
    props.updateFacilityList(tagUuid);
    setSelectedUuid(tagUuid);
  }

  const renderItem = (tag) => {
    return <TouchableOpacity style={[styles.item, selectedUuid == tag.uuid && {backgroundColor: color.secondaryColor}]}
              onPress={() => toggleFilter(tag)}
           >
              <Text style={[styles.label, selectedUuid == tag.uuid && {color: color.whiteColor}]}>{tag.name}</Text>
           </TouchableOpacity>
  }

  const onEndReached = () => {
    if (synced)
      return listRef.current?.stopPaginateLoading()

    tagSyncService.syncAllData((newTags) => {
      synced = true;
      listRef.current?.stopPaginateLoading();
    }, () => listRef.current?.stopPaginateLoading())
  }

  return <View style={{paddingLeft: screenHorizontalPadding, height: isLowPixelDensityDevice() ? 54 : 68}}>
            <CustomFlatListComponent
              ref={listRef}
              data={props.tags}
              renderItem={({item}) => renderItem(item)}
              keyExtractor={item => item.uuid}
              horizontal={true}
              hasInternet={props.hasInternet}
              showsHorizontalScrollIndicator={false}
              customContentContainerStyle={[{flexDirection: 'row', marginTop: 8, paddingRight: 4, marginBottom: 5, borderWidth: 1, borderColor: 'black'}, props.containerStyle]}
              endReachedAction={() => onEndReached()}
            />
         </View>
}

const styles = StyleSheet.create({
  item: {
    alignItems: 'center',
    backgroundColor: color.whiteColor,
    borderRadius: 25,
    height: isLowPixelDensityDevice() ? 40 : componentUtil.pressableItemSize(),
    justifyContent: 'center',
    marginRight: 12,
    minWidth: 60,
    paddingHorizontal: 12,
  },
  label: {
    color: color.primaryColor,
    fontSize: largeFontSize()
  }
});

export default FacilityTagScrollBarComponent;