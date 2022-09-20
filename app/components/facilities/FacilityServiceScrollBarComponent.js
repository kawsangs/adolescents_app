import React from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import {Text} from 'react-native-paper';

import color from '../../themes/color';
import {largeFontSize} from '../../utils/font_size_util';
import componentUtil from '../../utils/component_util';
import Service from '../../models/Service';

const FacilityServiceScrollBarComponent = () => {
  const renderList = () => {
    const services = Service.getAll();
    return services.map((service, index) => {
      return <View key={index} style={styles.item}>
                <Text style={styles.label}>{service.name}</Text>
             </View>
    });
  }

  return (
    <ScrollView
      contentContainerStyle={{flexDirection: 'row', marginTop: 8, paddingRight: 4, marginBottom: 5}}
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
    height: componentUtil.pressableItemSize(),
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