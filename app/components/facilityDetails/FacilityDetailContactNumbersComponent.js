import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Text} from 'react-native-paper';
import {useTranslation} from 'react-i18next';

import color from '../../themes/color';
import {largeFontSize} from '../../utils/font_size_util';
import translationHelper from '../../helpers/translation_helper';
import contactHelper from '../../helpers/contact_helper';
import {PHONE} from '../../constants/contact_constant';

const FacilityDetailContactNumbersComponent = (props) => {
  const {i18n} = useTranslation();
  const renderContactNumbers = () => {
    return props.contactNumbers.map((number, index) => {
      return <TouchableOpacity key={index} style={{justifyContent: 'center', height: 30, marginTop: 12}}
                onPress={() => contactHelper.openContactLink(PHONE, number)}
             >
                <Text style={{fontSize: largeFontSize(), marginLeft: 8,  color: color.primaryColor, textAlign: 'center'}}>
                    {translationHelper.translateNumber(contactHelper.getFormattedPhoneNumber(number), i18n.language)}
                </Text>
             </TouchableOpacity>
    });
  }

  return renderContactNumbers();
}

export default FacilityDetailContactNumbersComponent;