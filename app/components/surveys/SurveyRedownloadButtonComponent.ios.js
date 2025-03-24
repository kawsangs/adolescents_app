import React, {useState} from 'react';
import {ActivityIndicator, View, TouchableOpacity} from 'react-native';
import {Text} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Feather';
import NetInfo from "@react-native-community/netinfo";
import {useTranslation} from 'react-i18next';
import { useSelector } from 'react-redux';

import color from '../../themes/color';
import { FontFamily } from '../../themes/font';
import surveyService from '../../services/survey_service';
import {largeFontSize} from '../../utils/font_size_util';

import BoldLabelComponent from '../shared/BoldLabelComponent';

const SurveyFormRedownloadButtonComponent = (props) => {
  const {t} = useTranslation();
  const [message, setMessage] = useState(t('noSurveyQuestionnaireDueToNoInternetConnection'));
  const [icon, setIcon] = useState('wifi-off');
  const [isLoading, setIsLoading] = useState(false);
  const appTheme = useSelector(state => state.appTheme.value);
  const primaryColor = appTheme.primary_color ?? color.primaryColor;
  const btnLabelColor = appTheme.primary_text_color ?? color.whiteColor;

  const downloadSurveyForm = () => {
    NetInfo.fetch().then(state => {
      if (state.isConnected) {
        setIsLoading(true);
        surveyService.findAndSave(props.topicId, () => {
          props.createNewSurvey();
          setIsLoading(false);
        }, (error) => {
          setMessage(t('failedToFetchSurveyQuestion'));
          setIcon('info');
          setIsLoading(false);
        });
      }
      else
        setMessage(t('noSurveyQuestionnaireDueToNoInternetConnection'));
    });
  }

  const renderMessage = () => {
    return (
      <React.Fragment>
        <Icon name={icon} size={85} color={color.lightGrayColor} style={{marginTop: -30}} />
        <Text style={{fontFamily: FontFamily.regular, marginBottom: 26, marginTop: 16, fontSize: largeFontSize(), lineHeight: 28}}>
          {message}
        </Text>

        <TouchableOpacity onPress={() => downloadSurveyForm()} mode="contained"
          style={{borderRadius: 6, height: 48, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', backgroundColor: primaryColor, paddingHorizontal: 16}}
        >
          <Icon name='download' size={20} color={btnLabelColor} />
          <BoldLabelComponent label={t('downloadSurvey')} style={{fontSize: largeFontSize(), color: btnLabelColor, marginLeft: 8}} />
        </TouchableOpacity>
      </React.Fragment>
    )
  }

  return (
    <View style={{flex: 1, justifyContent:'center', alignItems: 'center', paddingHorizontal: 16, backgroundColor: 'white'}}>
      {
        isLoading ? <View style={{flex: 1, justifyContent: 'center'}}><ActivityIndicator size="large" color={primaryColor} /></View>
        : renderMessage()
      }
    </View>
  )
}

export default SurveyFormRedownloadButtonComponent;