import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import {Text} from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import BoldLabelComponent from '../shared/BoldLabelComponent';
import color from '../../themes/color';
import {xxLargeFontSize, xLargeFontSize, largeFontSize} from '../../utils/font_size_util';
import componentUtil from '../../utils/component_util';

const FacilityDetailContactPlatformsComponent = () => {
  const renderPlatformButtons = () => {
    const platforms = [
      {name: "គេហទំព័រ", icon: "window-maximize", size: 26},
      {name: "ហ្វេសបុក", icon: "facebook-f", size: 30},
      {name: "តេលេក្រាម", icon: "paper-plane", size: 26},
    ];

    return platforms.map((platform, index) => {
      return (
        <View>
          <TouchableOpacity key={index} style={styles.btn}>
            <FontAwesome name={platform.icon} size={platform.size} color={color.whiteColor} />
          </TouchableOpacity>

          <Text style={{marginTop: 8, fontSize: largeFontSize(), color: color.primaryColor}}>{platform.name}</Text>
        </View>
      )
    });
  }

  return (
    <View style={{marginTop: 18}}>
      <BoldLabelComponent label="អាចទំនាក់ទនងតាមរយះ" style={{fontSize: xxLargeFontSize(), textAlign: 'center'}} />

      <View style={{flexDirection: 'row', justifyContent: 'space-around', marginTop: 8}}>
        {renderPlatformButtons()}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  btn: {
    alignItems: 'center',
    backgroundColor: color.primaryColor,
    borderRadius: 56,
    justifyContent: 'center',
    height: componentUtil.mediumPressableItemSize(),
    width: componentUtil.mediumPressableItemSize(),
  }
});

export default FacilityDetailContactPlatformsComponent;