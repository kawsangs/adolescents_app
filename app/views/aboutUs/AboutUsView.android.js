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
  const renderListItems = () => {
    const items = [
      '១- សេវាព័ត៌មាន និងសេវាសុខភាពបន្តពូជ (SRHR)',
      '២- ការអប់រំសុខភាពផ្លូវភេទ (CSE)',
      '៣- យេនឌ័រ សុខភាពផ្លូវចិត្ត និងជំនួយគាំទ្រសុខភាពផ្លូវចិត្ត (MHPSS)',
      '៤- វីដេអូអប់រំកម្សាន្ត'
    ]
    return items.map((item, index) => <Text key={index} style={{fontSize: descriptionFontSize, lineHeight: 28, marginTop: 10}}>{item}</Text>)
  }

  const renderParagraph = (text) => {
    return <Text style={{fontSize: descriptionFontSize, textAlign: 'center', lineHeight: 28, marginTop: 30}}>{text}</Text>
  }

  return (
    <View style={{flex: 1, backgroundColor: color.whiteColor}}>
      <NavigationHeaderWithBackButtonComponent label={t('about')} />
      <ScrollView contentContainerStyle={{paddingHorizontal: screenHorizontalPadding, paddingVertical: 16, alignItems: 'center'}}>
        <BoldLabelComponent label="សុខភាពយុវជន" style={{fontSize: isLowPixelDensityDevice() ? 24 : 30, marginTop: 10}} />
        {renderParagraph('កម្មវិធីអ៊ែប “សុខភាពយុវជន” ត្រូវបានបង្កើតឡើងសម្រាប់ការប្រើប្រាស់ដោយឥតគិតថ្លៃជាភាសាខ្មែរ ដែលផ្តល់ឱ្យកុមារ ក្មេង​ជំទង់ និងយុវជនកម្ពុជានូវព័ត៌មានជាក់លាក់ និងសេវាចាំបាច់នានាដែលអាចជឿទុកចិត្តបានដូចជា៖')}
        <View style={{flex: 1, justifyContent: 'flex-start', marginTop: 10}}>
          { renderListItems() }
        </View>
        {renderParagraph('កម្មវិធីអ៊ែបនេះត្រូវបានរចនាឡើងជាមួយរូបរាង និងខ្លឹមសារសម្រាប់អ្នកប្រើប្រាស់ថ្មីថ្មោង និងមានលក្ខណៈបរិយាបន្ន ដោយមានរួមបញ្ចូលនូវការប្រើប្រាស់ សំឡេង ចលនា វីដេអូ និងតួសម្តែង។ កម្មវិធីអ៊ែបនេះ ក៏មានផ្តល់តំណភ្ជាប់ទៅកាន់សេវាពិគ្រោះយោបល់ និងបណ្តាញទូរស័ព្ទជំនួយ និងពិគ្រោះយោបល់ដោយផ្ទាល់ និងឥតគិតថ្លៃផងដែរ។')}
        {renderParagraph('កម្មវិធីអ៊ែប “សុខភាពយុវជន” ត្រូវបានផ្តួចផ្តើមឡើងដោយក្រុមប្រឹក្សាជាតិអភិវឌ្ឍន៍យុវជនកម្ពុជា និងក្រសួងអប់រំ យុវជន និងកីឡា ដែលគម្រោងនេះអនុវត្តដោយបណ្តាញទូរស័ព្ទជំនួយកុមារកម្ពុជា និងអ៊ែបវិស្វករ Kawsang Co., Ltd ដែលជាផលិតផលរួមគ្នាក្រោមកម្មវិធីដែលគាំទ្រដោយ មូលនិធិសហប្រជាជាតិសម្រាប់ប្រជាជន (UNFPA) និងរាជរដ្ឋាភិបាលជប៉ុន (Government of Japan)។')}
        <AboutUsLogosComponent/>
        <View style={{alignSelf: 'flex-end', justifyContent: 'flex-end', marginTop: 26}}>
          <Text style={{ fontSize: descriptionFontSize }}>{t('version')} {translationHelper.translateNumber(pkg.version, i18n.language)}</Text>
        </View>
      </ScrollView>
    </View>
  )
}

export default AboutUsView;