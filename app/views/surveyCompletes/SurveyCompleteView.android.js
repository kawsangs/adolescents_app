import React, { useEffect } from 'react';
import {StyleSheet, View, Image, BackHandler} from 'react-native';
import {Text, Button} from 'react-native-paper';
import {useTranslation} from 'react-i18next';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import FastImage from 'react-native-fast-image';
import { useSelector } from 'react-redux';

import color from '../../themes/color';
import {FontFamily} from '../../themes/font';
import { xLargeFontSize, largeFontSize } from '../../utils/font_size_util';
import {screenHorizontalPadding, buttonBorderRadius} from '../../constants/component_constant';
import componentUtil from '../../utils/component_util';
import { navigationRef } from '../../navigators/app_navigator';

const SurveyCompleteView = () => {
  const {t} = useTranslation();
  const appTheme = useSelector(state => state.appTheme.value);
  const resolvedSource = Image.resolveAssetSource(require('../../assets/images/check-mark.gif'));

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => {
        return true;
      },
    );
    return () => backHandler.remove();
  }, []);

  return (
    <View style={styles.container}>
      <FastImage
        source={{ uri: resolvedSource.uri }} // Use resolved path
        style={styles.gifImage}
        resizeMode={FastImage.resizeMode.contain}
      />

      <Text style={styles.description}>
        {t('thankYou')}
      </Text>
      <Text style={styles.description}>
        {t('forParticipatingInTheSurvey')}
      </Text>

      <Button style={[styles.btn, { backgroundColor: appTheme.primary_color ?? color.primaryColor }]} onPress={() => {
        navigationRef.current?.reset({ index: 0, routes: [{ name: 'DrawerNavigator' }]});
      }}
        labelStyle={{color: color.whiteColor, fontSize: largeFontSize(), fontFamily: FontFamily.regular}}
        contentStyle={{width: '100%'}}
      >
        {t('confirm')}
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignContent: 'center',
    backgroundColor: color.whiteColor,
    flex: 1,
    paddingHorizontal: screenHorizontalPadding,
    justifyContent: 'center'
  },
  description: {
    fontSize: xLargeFontSize(),
    fontFamily: FontFamily.regular,
    lineHeight: 32,
    textAlign: 'center',
  },
  btn: {
    // alignItems: 'center',
    alignSelf: 'center',
    borderRadius: buttonBorderRadius,
    justifyContent: 'center',
    height: componentUtil.pressableItemSize(),
    // minWidth: componentUtil.pressableItemSize(),
    // paddingHorizontal: 12,
    width: '70%',
    marginTop: 60
  },
  gifImage: {
    alignSelf: 'center',
    height: wp('70%'),
    width: wp('90%'),
    marginTop: -hp('16%')
  }
});

export default SurveyCompleteView;