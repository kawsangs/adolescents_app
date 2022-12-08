import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {Text} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Feather';
import {useTranslation} from 'react-i18next';
import FeatherIcon from 'react-native-vector-icons/Feather';

import color from '../../themes/color';
import {xLargeFontSize} from '../../utils/font_size_util';
import {isLowPixelDensityDevice, getStyleOfDevice} from '../../utils/responsive_util';
import componentUtil from '../../utils/component_util';
import {navigationHeaderIconSize} from '../../constants/component_constant';

const PlayVideoWarningMessageComponent = (props) => {
  const {t} = useTranslation();
  const iconName = props.hasInternet ? "video-off" : "wifi-off";
  const message = props.hasInternet ? "noVideoAvailable" : "noInternetConnection";

  const closeButton = () => {
    return <TouchableOpacity onPress={() => props.closeModal()}
              style={{width: componentUtil.pressableItemSize(), height: componentUtil.pressableItemSize(), justifyContent: 'center', alignItems: 'center', marginTop: 3, marginLeft: getStyleOfDevice(16, 0)}}
           >
              <FeatherIcon name="x" color={color.whiteColor} size={navigationHeaderIconSize} />
           </TouchableOpacity>
  }

  return (
    <View style={{flex: 1, borderWidth: 0.1, borderColor: 'transparent'}}>
      {closeButton()}
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Icon name={iconName} size={isLowPixelDensityDevice() ? 45 : 50} color={color.whiteColor} />
        <Text style={{color: color.whiteColor, fontSize: xLargeFontSize(), marginTop: 20}}>{t(message)}</Text>
      </View>
    </View>
  )
}

export default PlayVideoWarningMessageComponent;