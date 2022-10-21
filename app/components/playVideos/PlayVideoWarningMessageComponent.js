import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Feather';
import {useTranslation} from 'react-i18next';

import color from '../../themes/color';
import {xLargeFontSize} from '../../utils/font_size_util';
import {isLowPixelDensityDevice} from '../../utils/responsive_util';

const PlayVideoWarningMessageComponent = (props) => {
  const {t} = useTranslation();
  const iconName = !props.hasVideo ? "video-off" : "wifi-off";
  const message = !props.hasVideo ? "noVideoAvailable" : "noInternetConnection";

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Icon name={iconName} size={isLowPixelDensityDevice() ? 45 : 50} color={color.whiteColor} />
      <Text style={{color: color.whiteColor, fontSize: xLargeFontSize(), marginTop: 20}}>{t(message)}</Text>
    </View>
  )
}

export default PlayVideoWarningMessageComponent;