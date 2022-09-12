import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-paper';
import FeatherIcon from 'react-native-vector-icons/Feather';

import GradientViewComponent from '../shared/GradientViewComponent';
import color from '../../themes/color';
import {largeFontSize} from '../../utils/font_size_util';

const DrawerNavigatorHeaderComponent = (props) => {
  return (
    <View style={{flexDirection: 'row', borderWidth: 0, marginTop: 40, alignItems: 'center'}}>
      <GradientViewComponent style={{ width: 64, height: 64, borderRadius: 30, justifyContent: 'center', alignItems: 'center' }}>
        <FeatherIcon name='user' color={color.whiteColor} size={29} />
      </GradientViewComponent>

      <Text style={{color: color.whiteColor, marginLeft: 16, fontSize: largeFontSize()}}>ប្រុស | ២០ឆ្នាំ</Text>
    </View>
  )
}

export default DrawerNavigatorHeaderComponent;