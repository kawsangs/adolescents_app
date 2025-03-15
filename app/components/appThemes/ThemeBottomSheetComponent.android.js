import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import {useTranslation} from 'react-i18next';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

import BottomSheetModalMainComponent from '../shared/BottomSheetModalMainComponent';
import { contactContentHeight } from '../../constants/modal_constant';

const ThemeBottomSheetComponent = () => {
  return (
    <BottomSheetModalMainComponent
      title="ម៉ូដរចនា"
      containerStyle={{height: hp(contactContentHeight)}}
      scrollViewStyle={{paddingHorizontal: 0}}
    >
      <View>
        <Text>Theme bottom sheet</Text>
      </View>
    </BottomSheetModalMainComponent>
  )
}

export default ThemeBottomSheetComponent;