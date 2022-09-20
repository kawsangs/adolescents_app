import React from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import {Text} from 'react-native-paper';

import color from '../../themes/color';
import {largeFontSize} from '../../utils/font_size_util';
import componentUtil from '../../utils/component_util';

const ClinicServiceScrollBarComponent = () => {
  const services = [
    {label: 'បន្តពូជ', value: 0},
    {label: 'រំលូត', value: 1},
    {label: 'រលូត', value: 2},
    {label: 'កាមរោគ', value: 3},
    {label: 'គាំពាមាតា និងទារក', value: 4},
    {label: 'គាំពាមាតា និងទារក', value: 5},
    {label: 'គាំពាមាតា និងទារក', value: 6},
  ]

  const renderList = () => {
    return services.map((service, index) => {
      return <View key={index} style={styles.item}>
                <Text style={styles.label}>{service.label}</Text>
             </View>
    });
  }

  return (
    <ScrollView
      contentContainerStyle={{flexDirection: 'row', marginTop: 8, paddingRight: 4, marginBottom: 16}}
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

export default ClinicServiceScrollBarComponent;