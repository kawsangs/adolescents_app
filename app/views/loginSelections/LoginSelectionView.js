import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

import GradientBackgroundComponent from '../../components/shared/GradientBackgroundComponent';
import BoldLabelComponent from '../../components/shared/BoldLabelComponent';
import LoginSelectionButtonsComponent from '../../components/loginSelections/LoginSelectionButtonsComponent';

import color from '../../themes/color';
import {bigFontSize} from '../../utils/font_size_util';

const LoginSelectionView = (props) => {
  const renderBody = () => {
    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Image source={require('../../assets/images/app_logo.png')} resizeMode='contain' style={styles.logo} />
        <BoldLabelComponent label="សុខភាពខ្ញុំ សូមស្វាគមន៏" style={styles.title} />

        <Text style={styles.label}>អ្នកអាចប្រេីកម្មវីធីនេះតាមរបៀបណាមួយខាងក្រោម</Text>

        <LoginSelectionButtonsComponent/>
      </View>
    )
  }

  return (
    <GradientBackgroundComponent
      scrollable={false}
      scrollViewStyle={{paddingBottom: 0, paddingHorizontal: 34}}
      body={renderBody()}
    />
  )
}

const styles = StyleSheet.create({
  logo: {
    alignSelf: 'center',
    width: 80,
    height: 98,
  },
  title: {
    color: color.whiteColor,
    fontSize: 20,
    marginTop: 16,
    textAlign: 'center',
    textShadowColor: '#000',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 6
  },
  label: {
    color: color.whiteColor,
    marginTop: 78,
    textAlign: 'center',
    fontSize: bigFontSize()
  }
});

export default LoginSelectionView;