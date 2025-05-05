import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-paper';
import {useTranslation} from 'react-i18next';
import Icon from 'react-native-vector-icons/FontAwesome5';

import HeaderWithDiscardAlertComponent from '../shared/HeaderWithDiscardAlertComponent';
import NavigationHeaderBackButtonComponent from '../shared/NavigationHeaderBackButtonComponent';
import CustomAudioPlayerButtonComponent from '../shared/CustomAudioPlayerButtonComponent';
import AutoScrollLabelComponent from '../shared/AutoScrollLabelComponent';
import color from '../../themes/color';
import {largeFontSize} from '../../utils/font_size_util';
import Survey from '../../models/Survey';

const SurveyNavigationHeaderComponent = (props) => {
  const {t} = useTranslation();
  const confirmMessage = () => {
    return <View style={{flexDirection: "row"}}>
              <View><Icon name="exclamation" size={22} color={color.secondaryColor} /></View>
              <View style={{marginLeft: 16, flex: 1, borderWidth: 0}}>
                <Text style={{fontSize: largeFontSize(), marginBottom: 4}}>{t('allYourAnswersWillBeDeleted')}</Text>
                <Text style={{fontSize: largeFontSize()}}>
                  {t('doYouReallyWantToLeaveThisSurvey')}
                </Text>
              </View>
              <View>
                <CustomAudioPlayerButtonComponent
                  rippled={true}
                  itemUuid='exit-survey-audio'
                  audio={null}
                />
              </View>
           </View>
  }

  return <HeaderWithDiscardAlertComponent
            customTitle={<AutoScrollLabelComponent label={props.title} />}
            leftButton={(onPress) => <NavigationHeaderBackButtonComponent onPress={() => onPress()} />}
            message={() => confirmMessage()}
            leftButtonLabel={t('cancel')}
            rightButtonLabel={t('yes')}
            hasDiscardAlert={() => (true)}
            onGoBack={() => Survey.deleteByUuid(props.surveyUuid)}
         />
}

export default SurveyNavigationHeaderComponent;