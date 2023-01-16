import React, {useState} from 'react';
import {ScrollView, StyleSheet, TouchableOpacity} from 'react-native';
import {Text} from 'react-native-paper';

import color from '../../themes/color';
import {largeFontSize} from '../../utils/font_size_util';
import componentUtil from '../../utils/component_util';
import {isLowPixelDensityDevice} from '../../utils/responsive_util';
import Tag from '../../models/Tag';

const FacilityTagScrollBarComponent = (props) => {
  const [selectedUuid, setSelectedUuid] = useState(null);
  const toggleFilter = (tag) => {
    const tagUuid = selectedUuid == tag.uuid ? null : tag.uuid;
    props.updateFacilityList(tagUuid);
    setSelectedUuid(tagUuid);
  }

  const renderList = () => {
    return Tag.getAll().map((tag, index) => {
      return <TouchableOpacity key={`filter-tag-${index}`} style={[styles.item, selectedUuid == tag.uuid && {backgroundColor: color.secondaryColor}]}
                onPress={() => toggleFilter(tag)}
             >
                <Text style={[styles.label, selectedUuid == tag.uuid && {color: color.whiteColor}]}>{tag.name}</Text>
             </TouchableOpacity>
    });
  }

  return (
    <ScrollView
      contentContainerStyle={[{flexDirection: 'row', marginTop: 8, paddingRight: 4, marginBottom: 5}, props.containerStyle]}
      style={{flexGrow: 0}}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    >
      { renderList() }
    </ScrollView>
  )
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