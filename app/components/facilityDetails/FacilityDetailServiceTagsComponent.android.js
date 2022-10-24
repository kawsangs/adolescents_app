import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text} from 'react-native-paper';
import {useTranslation} from 'react-i18next';

import BoldLabelComponent from '../shared/BoldLabelComponent';
import color from '../../themes/color';
import {xLargeFontSize, xxLargeFontSize} from '../../utils/font_size_util';
import Service from '../../models/Service';

const FacilityDetailServiceTagsComponent = (props) => {
  const {t} = useTranslation();
  const renderTags = () => {
    let doms = [];
    props.serviceUuids.map((serviceUuid, index) => {
      doms.push(
        <View key={index} style={styles.tag}>
          <Text style={{color: color.blackColor, fontSize: xLargeFontSize()}}>{Service.findByUuid(serviceUuid).name}</Text>
        </View>
      )
    });
    return doms;
  }

  return (
    <View style={{marginTop: 33}}>
      <BoldLabelComponent label={t('providedServices')} style={{fontSize: xxLargeFontSize(), textAlign: 'center'}} />
      <View style={{flexDirection: 'row', flexWrap: 'wrap', marginTop: 12}}>
        {renderTags()}
      </View>
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