import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import {Text} from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {useTranslation} from 'react-i18next';

import BoldLabelComponent from '../shared/BoldLabelComponent';
import FacilityDetailContactNumberBottomSheetComponent from './FacilityDetailContactNumberBottomSheetComponent';

import color from '../../themes/color';
import {xLargeFontSize, largeFontSize} from '../../utils/font_size_util';
import componentUtil from '../../utils/component_util';
import contactHelper from '../../helpers/contact_helper';
import {FACEBOOK, TELEGRAM, WEBSITE, PHONE} from '../../constants/contact_constant';
import { contactNumbersSnapPoints } from '../../constants/modal_constant';

const FacilityDetailContactPlatformsComponent = (props) => {
  const {t} = useTranslation()
  const renderPlatformButtons = () => {
    const platforms = [
      {name: t("phone"), icon: "phone", size: 30, value: props.contactNumbers, type: PHONE, color: color.primaryColor},
      {name: t("website"), icon: "globe", size: 35, value: !!props.websites ? props.websites[0] : null, type: WEBSITE, color: color.primaryColor},
      {name: t("facebook"), icon: "facebook-f", size: 30, value: !!props.facebookPages ? props.facebookPages[0] : null, type: FACEBOOK, color: color.primaryColor},
      {name: t("telegram"), icon: "paper-plane", size: 26, value: !!props.telegram ? props.telegram : null, type: TELEGRAM, color: color.primaryColor},
    ]

    const openContactLink = (platform) => {
      if (!platform.value) return;

      if (platform.type == PHONE && platform.value.length > 1)
        return showContactNumbers();

      contactHelper.openContactLink(platform.type, platform.value);
    }

    const showContactNumbers = () => {
      props.bottomSheetRef.current?.setSnapPoints(contactNumbersSnapPoints);
      props.bottomSheetRef.current?.setBodyContent(<FacilityDetailContactNumberBottomSheetComponent numbers={props.contactNumbers}/>);
      props.modalRef.current?.present();
    }

    return platforms.map((platform, index) => {
      if (platform.value)
        return (
          <View key={index} style={{alignItems: 'center'}}>
            <TouchableOpacity onPress={() => openContactLink(platform)} style={[styles.btn, {backgroundColor: platform.color}]}>
              {platform.type == WEBSITE ? <FeatherIcon name={platform.icon} size={platform.size} color={color.whiteColor} />
               : <FontAwesome name={platform.icon} size={platform.size} color={color.whiteColor} />
              }
            </TouchableOpacity>

            <Text style={{marginTop: 8, fontSize: largeFontSize(), color: color.primaryColor}}>{platform.name}</Text>
          </View>
        )
    });
  }

  return (
    <View style={{marginTop: 33}}>
      <BoldLabelComponent label={t("contactVia")} style={{fontSize: xLargeFontSize(), textAlign: 'center'}} />
      <View style={{flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 8}}>
        {renderPlatformButtons()}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  btn: {
    alignItems: 'center',
    borderRadius: 56,
    justifyContent: 'center',
    height: componentUtil.mediumPressableItemSize(),
    width: componentUtil.mediumPressableItemSize(),
  }
});

export default FacilityDetailContactPlatformsComponent;