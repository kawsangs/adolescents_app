import React from 'react';
import {View, Image} from 'react-native';
import {Text} from 'react-native-paper';
import {useTranslation} from 'react-i18next';

import color from '../../themes/color';
import {xxLargeFontSize} from '../../utils/font_size_util';
import {gradientScrollViewBigPaddingBottom} from '../../constants/ios_component_constant';

const NotificationEmptyListComponent = () => {
  const {t} = useTranslation();

  return (
    <View style={{flexGrow: 1, backgroundColor: color.whiteColor, justifyContent: 'center', alignItems: 'center', paddingBottom: gradientScrollViewBigPaddingBottom}}>
      <Image source={require('../../assets/images/no_notification.png')} style={{width: 192, height: 192}} />
      <Text style={{marginTop: 16, fontSize: xxLargeFontSize(), color: color.grayColor}}>{t('noNotification')}</Text>
    </View>
  )
}

export default NotificationEmptyListComponent;