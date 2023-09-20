import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-paper';
import {useTranslation} from 'react-i18next';
import Icon from 'react-native-vector-icons/FontAwesome5';

import HeaderWithDiscardAlertComponent from '../shared/HeaderWithDiscardAlertComponent';
import NavigationHeaderBackButtonComponent from '../shared/NavigationHeaderBackButtonComponent';
import color from '../../themes/color';
import {largeFontSize} from '../../utils/font_size_util';

const SurveyNavigationHeaderComponent = () => {
  const {t} = useTranslation();

  // Todo: move label to locale
  const confirmMessage = () => {
    return <View style={{flexDirection: "row"}}>
              <View style={{marginTop: 4}}><Icon name="exclamation" size={22} color={color.secondaryColor} /></View>
              <View style={{marginLeft: 16}}>
                <Text style={{fontSize: largeFontSize(), marginBottom: 8}}>រាល់ចម្លើយដែលអ្នកបានឆ្លើយនឹងត្រូវបាត់បង់។</Text>
                <Text style={{fontSize: largeFontSize()}}>
                  តើអ្នក​ពិតជា​ចង់​ចាកចេញ​ពី​ការស្ទង់​មតិ​នេះ​មែន​ទេ?
                </Text>
              </View>
           </View>
  }

  return <HeaderWithDiscardAlertComponent
            title="Survey"
            leftButton={(onPress) => <NavigationHeaderBackButtonComponent onPress={() => onPress()} />}
            message={() => confirmMessage()}
            leftButtonLabel={'បោះបង់'}
            rightButtonLabel={'បាទ/ចាស'}
            hasDiscardAlert={() => (true)}
            onGoBack={() => console.log('== Remove Survey from realm ==')}
         />
}

export default SurveyNavigationHeaderComponent;