import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import {Text} from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import BoldLabelComponent from '../shared/BoldLabelComponent';
import color from '../../themes/color';
import {xxLargeFontSize, largeFontSize} from '../../utils/font_size_util';
import componentUtil from '../../utils/component_util';
import contactHelper from '../../helpers/contact_helper';
import {FACEBOOK, TELEGRAM, WEBSITE} from '../../constants/contact_constant';

const FacilityDetailContactPlatformsComponent = (props) => {
  const renderPlatformButtons = () => {
    const platforms = [
      {name: "គេហទំព័រ", icon: "window-maximize", size: 26, value: !!props.websites ? props.websites[0] : null, type: WEBSITE},
      {name: "ហ្វេសបុក", icon: "facebook-f", size: 30, value: !!props.facebookPages ? props.facebookPages[0] : null, type: FACEBOOK},
      {name: "តេលេក្រាម", icon: "paper-plane", size: 26, value: !!props.telegram ? props.telegram : null, type: TELEGRAM},
    ]

    const openContactLink = (platform) => {
      if (!platform.value) return;

      contactHelper.openContactLink(platform.type, platform.value);
    }

    return platforms.map((platform, index) => {
      if (platform.value)
        return (
          <View key={index}>
            <TouchableOpacity onPress={() => openContactLink(platform)} style={styles.btn}>
              <FontAwesome name={platform.icon} size={platform.size} color={color.whiteColor} />
            </TouchableOpacity>

            <Text style={{marginTop: 8, fontSize: largeFontSize(), color: color.primaryColor}}>{platform.name}</Text>
          </View>
        )
    });
  }

  return (
    <View style={{marginTop: 18}}>
      <BoldLabelComponent label="អាចទំនាក់ទនងតាមរយៈ" style={{fontSize: xxLargeFontSize(), textAlign: 'center'}} />

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