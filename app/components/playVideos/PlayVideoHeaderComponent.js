import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-paper';

import NavigationHeaderComponent from '../shared/NavigationHeaderComponent';
import NavigationHeaderCloseButtonComponent from '../shared/navigationHeaders/NavigationHeaderCloseButtonComponent';
import color from '../../themes/color';
import {navigationHeaderHeight} from '../../constants/component_constant';
import {navigationRef} from '../../navigators/app_navigator';
import {xxLargeFontSize} from '../../utils/font_size_util';

const PlayVideoHeaderComponent = (props) => {
  return <View style={{height: navigationHeaderHeight}}>
            <NavigationHeaderComponent
              leftButton={<NavigationHeaderCloseButtonComponent onPress={() => navigationRef.current?.goBack()}/>}
              customTitle={<Text style={{color: color.whiteColor, fontSize: xxLargeFontSize(), marginLeft: 10}}>{props.title}</Text>}
              headerStyle={{backgroundColor: color.blackColor}}
            />
         </View>
}

export default PlayVideoHeaderComponent;