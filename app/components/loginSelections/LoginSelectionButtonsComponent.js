import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

import color from '../../themes/color';
import LoginSelectionButtonComponent from './LoginSelectionButtonComponent';
import {bigFontSize, normalFontSize} from '../../utils/font_size_util';
import {navigationRef} from '../../navigators/app_navigator';

const LoginSelectionButtonsComponent = (props) => {
  return (
    <React.Fragment>
      <LoginSelectionButtonComponent label="ភ្ជាប់អត្តសញ្ញាណ" iconName="user" btnStyle={{marginTop: 18}}
        onPress={() => navigationRef.current?.navigate('BottomTabs')}
      />
      <View style={{marginVertical: 12, borderWidth: 0, height: 24, width: 138, alignSelf: 'center', alignItems: 'center', flexDirection: 'row'}}>
        <View style={{borderBottomWidth: 1, borderColor: color.whiteColor, flex: 1}} />
        <Text style={{borderWidth: 0, width: 11, textAlign: 'center', color: color.whiteColor, marginHorizontal: 13, fontSize: normalFontSize()}}>ឬ</Text>
        <View style={{borderBottomWidth: 1, borderColor: color.whiteColor, flex: 1}} />
      </View>

      <LoginSelectionButtonComponent label="មិនភ្ជាប់អត្តសញ្ញាណ" iconName="user-x" />
    </React.Fragment>
  )
}

export default LoginSelectionButtonsComponent;