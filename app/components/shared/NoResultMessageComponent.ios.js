import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-paper';
import {useTranslation} from 'react-i18next';
import Icon from 'react-native-vector-icons/Feather';
import { useSelector } from 'react-redux';

import color from '../../themes/color';
import {xxLargeFontSize} from '../../utils/font_size_util';
import {getStyleOfDevice} from '../../utils/responsive_util';

const NoResultMessageComponent = () => {
  const {t} = useTranslation();
  const appTheme = useSelector(state => state.appTheme.value);
  return <View style={{justifyContent: 'center', alignItems: 'center', flexGrow: 1, width: '100%'}}>
            <Icon name="file-text" size={getStyleOfDevice(110, 90)}
              color={appTheme.primary_text_color ?? color.whiteSmokeColor}
              style={{marginTop: getStyleOfDevice(80, 0)}}
            />
            <Text style={{fontSize: xxLargeFontSize(), color: appTheme.primary_text_color ?? color.whiteColor, marginTop: 10}}>
              {t('noResult')}
            </Text>
         </View>
}

export default NoResultMessageComponent