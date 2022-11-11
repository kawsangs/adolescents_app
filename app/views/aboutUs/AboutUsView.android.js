import React from 'react';
import {View, ScrollView} from 'react-native';
import {Text} from 'react-native-paper';
import {useTranslation} from 'react-i18next';

import NavigationHeaderWithBackButtonComponent from '../../components/shared/NavigationHeaderWithBackButtonComponent';
import BoldLabelComponent from '../../components/shared/BoldLabelComponent';
import AboutUsLogosComponent from '../../components/aboutUs/AboutUsLogosComponent';
import color from '../../themes/color';
import {descriptionFontSize, screenHorizontalPadding} from '../../constants/component_constant';
import translationHelper from '../../helpers/translation_helper';
import {isLowPixelDensityDevice} from '../../utils/responsive_util';
import pkg from '../../../package';

const AboutUsView = () => {
  const {t, i18n} = useTranslation();
  return (
    <View style={{flex: 1, backgroundColor: color.whiteColor}}>
      <NavigationHeaderWithBackButtonComponent label={t('about')} />
      <ScrollView contentContainerStyle={{paddingHorizontal: screenHorizontalPadding, paddingVertical: 16, alignItems: 'center'}}>
        <BoldLabelComponent label="សុខភាពយុវជន" style={{fontSize: isLowPixelDensityDevice() ? 24 : 30, marginTop: 10}} />

        <Text style={{fontSize: descriptionFontSize, textAlign: 'center', lineHeight: 28, marginTop: 30}}>
          កម្មវិធីអ៊ែប “សុខភាពយុវជន” បាន​ផ្តួចផ្តើម​កសាង​ឡើង​ដោយ ក្រុម​ប្រឹក្សា​ជាតិ​អភិវឌ្ឍន៍​យុវជន​កម្ពុជា និងក្រសួងអប់រំ យុវជន និង កីឡា  ដែល​គម្រោង​នេះ​អនុវត្ត​ដោយ​បណ្តាញ​ទូរស័ព្ទ​ជំនួយ​កុមារ​កម្ពុជា (CHC) និង អ៊ែបវិស្វករ Kawsang Co., Ltd ដែល​ជា​ផលិតផល​ក្រោម​កម្មវិធី​ដែល​គាំទ្រ​ដោយ មូលនិធី​សហប្រជាជាតិ​សម្រាប់​ប្រជាជន (UNFPA) និងរាជរដ្ឋាភិបាល​ជប៉ុន (Japan Government)។ កម្មវិធីអ៊ែបនេះ គឺជា​ប្រភព​ព័ត៌មាន​ជា​សាធារណៈមួយ ដែល​បង្កើត​ឡើង​សម្រាប់​ប្រើប្រាស់​ដោយ​មិនមាន​ការ​គិតថ្លៃ និង មានបំណង​ឱ្យ​ប្រើប្រាស់​ស្រប​តាម​គោលបំណង​របស់អ៊ែប។
        </Text>

        <AboutUsLogosComponent/>
        <View style={{alignSelf: 'flex-end', justifyContent: 'flex-end', marginTop: 26}}>
          <Text style={{ fontSize: descriptionFontSize }}>{t('version')} {translationHelper.translateNumber(pkg.version, i18n.language)}</Text>
        </View>
      </ScrollView>
    </View>
  )
}

export default AboutUsView;