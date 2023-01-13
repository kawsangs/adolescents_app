import React, {useState} from 'react';
import {ScrollView, StyleSheet, TouchableOpacity} from 'react-native';
import {Text} from 'react-native-paper';

import color from '../../themes/color';
import {largeFontSize} from '../../utils/font_size_util';
import componentUtil from '../../utils/component_util';
import {isLowPixelDensityDevice} from '../../utils/responsive_util';
import Service from '../../models/Service';

const FacilityServiceScrollBarComponent = (props) => {
  const [selectedUuid, setSelectedUuid] = useState(null);
  const toggleFilter = (service) => {
    const serviceUuid = selectedUuid == service.uuid ? null : service.uuid;
    props.updateFacilityList(serviceUuid);
    setSelectedUuid(serviceUuid);
  }

  const renderList = () => {
    return Service.getAll().map((service, index) => {
      return <TouchableOpacity key={index} style={[styles.item, selectedUuid == service.uuid && {backgroundColor: color.secondaryColor}]}
                onPress={() => toggleFilter(service)}
             >
                <Text style={[styles.label, selectedUuid == service.uuid && {color: color.whiteColor}]}>{service.name}</Text>
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

export default FacilityServiceScrollBarComponent;