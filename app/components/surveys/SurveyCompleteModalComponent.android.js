import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {Modal, Portal, Button, Text} from 'react-native-paper';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import FastImage from 'react-native-fast-image';

import {buttonBorderRadius, cardBorderRadius} from '../../constants/component_constant';
import color from '../../themes/color';
import { xLargeFontSize, largeFontSize } from '../../utils/font_size_util';
import {FontFamily} from '../../themes/font';
import { isShortScreenDevice } from '../../utils/responsive_util';
import componentUtil from '../../utils/component_util';

const SurveyCompleteModalComponent = (props) => {
  const renderMessage = () => {
    const resolvedSource = Image.resolveAssetSource(require('../../assets/images/check-mark.gif'));
    return <View style={{flex: 1}}>
              <FastImage
                source={{ uri: resolvedSource.uri }} // Use resolved path
                style={styles.successImage}
                resizeMode={FastImage.resizeMode.contain}
              />
              <Text style={styles.description}>
                អ្នកបានបញ្ចប់ការឆ្លើយកម្រងសំណួរដោយជោគជ័យ។
              </Text>
           </View>
  }

  const renderButton = () => {
    return <Button style={styles.btn} onPress={() => props.onPressButton()}
              labelStyle={{color: color.whiteColor, fontSize: largeFontSize(), fontFamily: FontFamily.regular}}
            >
              យល់ព្រម
           </Button>
  }

  return (
    <Portal>
      <Modal
        visible={props.visible}
        contentContainerStyle={styles.container}
      >
        {renderMessage()}
        {renderButton()}
      </Modal>
    </Portal>
  )
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    backgroundColor: 'white',
    borderRadius: cardBorderRadius,
    justifyContent: 'flex-start',
    padding: 24,
    width: '90%',
    height: hp(isShortScreenDevice() ? '45%' : '43%')
  },
  description: {
    fontSize: xLargeFontSize(),
    fontFamily: FontFamily.regular,
    lineHeight: 32,
    textAlign: 'center'
  },
  btn: {
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: color.primaryColor,
    borderRadius: buttonBorderRadius,
    justifyContent: 'center',
    height: componentUtil.pressableItemSize(),
    minWidth: componentUtil.pressableItemSize(),
    paddingHorizontal: 12,
    width: '70%'
  },
  successImage: {
    alignSelf: 'center',
    marginBottom: 0,
    marginTop: -40,
    width: wp('80%'),
    height: wp('50%'),
  }
});

export default SurveyCompleteModalComponent;