import React from 'react';
import {View, ScrollView} from 'react-native';
import {Text} from 'react-native-paper';
import {useTranslation} from 'react-i18next';
import { SafeAreaView } from 'react-native-safe-area-context';

import NavigationHeaderWithBackButtonComponent from '../../components/shared/NavigationHeaderWithBackButtonComponent';
import BoldLabelComponent from '../../components/shared/BoldLabelComponent';
import AboutUsLogosComponent from '../../components/aboutUs/AboutUsLogosComponent';
import color from '../../themes/color';
import {screenHorizontalPadding} from '../../constants/component_constant';
import translationHelper from '../../helpers/translation_helper';
import {isLowPixelDensityDevice} from '../../utils/responsive_util';
import {xLargeFontSize} from '../../utils/font_size_util';
import pkg from '../../../package';

const AboutUsView = () => {
  const {t} = useTranslation();
  const renderListItems = (language) => {
    const items = {
      km: [
        '១- សេវាព័ត៌មាន និងសេវាសុខភាពបន្តពូជ (SRHR)',
        '២- ការអប់រំសុខភាពផ្លូវភេទ (CSE)',
        '៣- យេនឌ័រ សុខភាពផ្លូវចិត្ត និងជំនួយគាំទ្រសុខភាពផ្លូវចិត្ត (MHPSS)',
        '៤- វីដេអូអប់រំកម្សាន្ត'
      ],
      en: [
        '1. Sexual Reproductive Health information and service (SRHR)',
        '2. Comprehensive Sexuality Education (CSE)',
        '3. Gender and Mental Health and Psychosocial Support (MHPSS)',
        '4. Educational entertainment videos'
      ]
    }

    return items[language].map((item, index) => <Text key={index} style={{fontSize: xLargeFontSize(), lineHeight: 28, marginTop: 10, marginLeft: 16}}>{item}</Text>)
  }

  const renderParagraph = (text) => {
    return <Text style={{fontSize: xLargeFontSize(), lineHeight: 28, marginTop: 30}}>{text}</Text>
  }

  const renderKhmerText = () => {
    return <React.Fragment>
              {renderParagraph('កម្មវិធីអ៊ែប “សុខភាពយុវជន” ត្រូវបានបង្កើតឡើងសម្រាប់ការប្រើប្រាស់ដោយឥតគិតថ្លៃជាភាសាខ្មែរ ដែលផ្តល់ឱ្យកុមារ ក្មេង​ជំទង់ និងយុវជនកម្ពុជានូវព័ត៌មានជាក់លាក់ និងសេវាចាំបាច់នានាដែលអាចជឿទុកចិត្តបានដូចជា៖')}
              <View style={{flex: 1, justifyContent: 'flex-start', marginTop: 10}}>
                { renderListItems('km') }
              </View>
              {renderParagraph('កម្មវិធីអ៊ែបនេះត្រូវបានរចនាឡើងជាមួយរូបរាង និងខ្លឹមសារសម្រាប់អ្នកប្រើប្រាស់ថ្មីថ្មោង និងមានលក្ខណៈបរិយាបន្ន ដោយមានរួមបញ្ចូលនូវការប្រើប្រាស់ សំឡេង ចលនា វីដេអូ និងតួសម្តែង។ កម្មវិធីអ៊ែបនេះ ក៏មានផ្តល់តំណភ្ជាប់ទៅកាន់សេវាពិគ្រោះយោបល់ និងបណ្តាញទូរស័ព្ទជំនួយ និងពិគ្រោះយោបល់ដោយផ្ទាល់ និងឥតគិតថ្លៃផងដែរ។')}
              {renderParagraph('កម្មវិធីអ៊ែប “សុខភាពយុវជន” ត្រូវបានផ្តួចផ្តើមឡើងដោយក្រុមប្រឹក្សាជាតិកម្ពុជាដើម្បីអភិវឌ្ឍយុវជន និងក្រសួងអប់រំ យុវជន និងកីឡា ដែលគម្រោងនេះអនុវត្តដោយបណ្តាញទូរស័ព្ទជំនួយកុមារកម្ពុជា និងអ៊ែបវិស្វករ Kawsang Co., Ltd ដែលជាផលិតផលរួមគ្នាក្រោមកម្មវិធីដែលគាំទ្រដោយ មូលនិធិសហប្រជាជាតិសម្រាប់ប្រជាជន (UNFPA) និងរាជរដ្ឋាភិបាលជប៉ុន (Government of Japan)។')}
           </React.Fragment>
  }

  const renderEnglishText = () => {
    return <React.Fragment>
              {renderParagraph('“Youth Health” is a free-of-charge youth-friendly mobile application in the Khmer language that provides Cambodian children, adolescents, and youth with essential, reliable, practical information and services on:')}
              <View style={{flex: 1, justifyContent: 'flex-start', marginTop: 10}}>
                { renderListItems('en') }
              </View>
              {renderParagraph('Youth Health is designed to enable children, adolescents, and youth to make better choices and exercise their rights. The application interface and content are designed for novice and inclusive users by using visual aids such as audio, animation, videos, and role plays.')}
              {renderParagraph('Key features such as Sexual Reproductive Health information and service, Comprehensive Sexuality Education, Gender and diverse sexual rights, Clinic or service locators and Contraceptive service, Mental Health and Psychosocial Support, and Entertainment. There are also links to services and free helplines directly from the mobile application.')}
              {renderParagraph('The “Youth Health” app was initiated by the National Youth Development Council Cambodia and the Ministry of Education, Youth and Sports, which is implemented by the Child Helpline Cambodian and developed by Kawsang Co., Ltd app engineers, a joint product under the supported program by the United Nations Population Fund (UNFPA) and the Government of Japan.')}
           </React.Fragment>
  }

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: color.whiteColor}}>
      <NavigationHeaderWithBackButtonComponent label={t('about')} hasBackgroundColor={true} />
      <ScrollView contentContainerStyle={{paddingHorizontal: screenHorizontalPadding, paddingVertical: 16,}}>
        <BoldLabelComponent label="សុខភាពយុវជន" style={{fontSize: isLowPixelDensityDevice() ? 24 : 30, marginTop: 10, alignSelf: 'center', lineHeight: 40}} />
        {renderKhmerText()}
        {renderEnglishText()}
        <AboutUsLogosComponent/>
        <View style={{alignSelf: 'flex-end', justifyContent: 'flex-end', marginTop: 26}}>
          <Text style={{ fontSize: xLargeFontSize() }}>{t('version')} {translationHelper.translateNumber(pkg.version, t)}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default AboutUsView;