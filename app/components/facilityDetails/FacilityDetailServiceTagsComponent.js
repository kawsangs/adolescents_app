import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text} from 'react-native-paper';

import color from '../../themes/color';
import {largeFontSize} from '../../utils/font_size_util';
import Service from '../../models/Service';

const FacilityDetailServiceTagsComponent = (props) => {
  const renderTags = () => {
    let doms = [];
    props.serviceUuids.map((serviceUuid, index) => {
      doms.push(
        <View key={index} style={styles.tag}>
          <Text style={{color: color.blackColor, fontSize: largeFontSize()}}>{new Service().findByUuid(serviceUuid).name}</Text>
        </View>
      )
    });
    return doms;
  }

  return (
    <View style={{flexDirection: 'row', flexWrap: 'wrap', marginTop: 12}}>
      {renderTags()}
    </View>
  )
}

const styles = StyleSheet.create({
  tag: {
    backgroundColor: "#e3e3e3",
    borderRadius: 20,
    marginRight: 8,
    marginTop: 6,
    paddingHorizontal: 12,
    paddingVertical: 8,
  }
})

export default FacilityDetailServiceTagsComponent;