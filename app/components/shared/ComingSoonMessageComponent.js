import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Feather';
import {useTranslation} from "react-i18next";

import color from '../../themes/color';
import {xxLargeFontSize} from '../../utils/font_size_util';

const ComingSoonMessageComponent = () => {
  const {t} = useTranslation();
  return (
    <View style={{ flex: 1, justifyContent: 'center', backgroundColor: color.whiteColor }}>
      <View style={{alignItems: 'center', backgroundColor: color.whiteColor}}>
        <Icon name="file-text" size={100} color={color.disabledColor}  />
        <Text style={{color: color.grayColor, fontSize: xxLargeFontSize(), marginTop: 16,}}>{t("comingSoon")}</Text>
      </View>
    </View>
  )
}

export default ComingSoonMessageComponent