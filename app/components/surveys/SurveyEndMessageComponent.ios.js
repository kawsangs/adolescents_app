import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import {useTranslation} from 'react-i18next';

import color from '../../themes/color';
import {largeFontSize} from '../../utils/font_size_util';

const SurveyFormEndMessageComponent = (props) => {
  const {t} = useTranslation();
  const hasNoQuestion = props.visibleQuestions.filter(q => q == true).length == 0;
  return (
    <View style={[{paddingTop: 12, alignItems: 'center', justifyContent: 'center'}, hasNoQuestion && {height: '100%'}]}>
      <Icon name='checkmark-circle-outline' size={hasNoQuestion ? 100 : 70} color='#55d806' />
      <Text style={{marginLeft: 12, marginBottom: 18, color: color.whiteColor, fontSize: largeFontSize()}}>
        {t('thankYouForPaticipatingInTheSurvey')}
      </Text>
    </View>
  )
}

export default SurveyFormEndMessageComponent;