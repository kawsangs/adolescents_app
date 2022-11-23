import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import {Text} from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {useTranslation} from 'react-i18next';

import BoldLabelComponent from '../shared/BoldLabelComponent';
import FacilityDetailContactBottomSheetComponent from './FacilityDetailContactBottomSheetComponent';

import color from '../../themes/color';
import {xLargeFontSize, largeFontSize} from '../../utils/font_size_util';
import componentUtil from '../../utils/component_util';
import contactHelper from '../../helpers/contact_helper';
import {FACEBOOK, TELEGRAM, WEBSITE, PHONE} from '../../constants/contact_constant';
import { contactSnapPoints } from '../../constants/modal_constant';

const FacilityDetailContactPlatformsComponent = (props) => {
  const {t} = useTranslation()
  const renderPlatformButtons = () => {
    const platforms = [
      {name: t("phone"), icon: "phone", size: 26, value: props.contactNumbers.length > 0 ? props.contactNumbers : null, type: PHONE, color: color.primaryColor},
      {name: t("website"), icon: "globe", size: 28, value: props.websites.length > 0 ? props.websites : null, type: WEBSITE, color: color.primaryColor},
      {name: t("facebook"), icon: "facebook-f", size: 26, value: props.facebookPages.length > 0 ? props.facebookPages : null, type: FACEBOOK, color: color.primaryColor},
      {name: t("telegram"), icon: "paper-plane", size: 22, value: !!props.telegram ? props.telegram : null, type: TELEGRAM, color: color.primaryColor},
    ]

    const openContactLink = (platform) => {
      if (!platform.value) return;

      if (platform.type != TELEGRAM && platform.value.length > 1)
        return showModal(platform);

      contactHelper.openContactLink(platform.type, platform.type == TELEGRAM ? platform.value : platform.value[0]);
    }

    const showModal = (platform) => {
      props.bottomSheetRef.current?.setSnapPoints(contactSnapPoints);
      props.bottomSheetRef.current?.setBodyContent(<FacilityDetailContactBottomSheetComponent type={platform.type} items={platform.value} icon={platform.icon} />);
      props.modalRef.current?.present();
    }

    return platforms.map((platform, index) => {
      if (platform.value)
        return (
          <View key={index} style={{alignItems: 'center'}}>
            <TouchableOpacity onPress={() => openContactLink(platform)} style={[styles.btn]}>
              {platform.type == WEBSITE ? <FeatherIcon name={platform.icon} size={platform.size} color={color.primaryColor} />
               : <FontAwesome name={platform.icon} size={platform.size} color={color.primaryColor} />
              }
            </TouchableOpacity>

            <Text style={{marginTop: 8, fontSize: largeFontSize(), color: color.primaryColor}}>{platform.name}</Text>
          </View>
        )
    });
  }

  return (
    <View style={{marginTop: 16}}>
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
    borderWidth: 1.5,
    borderColor: color.primaryColor,
    justifyContent: 'center',
    height: componentUtil.mediumPressableItemSize(),
    width: componentUtil.mediumPressableItemSize(),
  }
});

export default FacilityDetailContactPlatformsComponent;