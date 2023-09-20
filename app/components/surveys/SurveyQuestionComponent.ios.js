import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-paper';

import SurveySelectOneQuestionComponent from './SurveySelectOneQuestionComponent';
import SurveySelectMultipleQuestionComponent from './SurveySelectMultipleQuestionComponent';
import SurveyTextQuestionComponent from './SurveyTextQuestionComponent';
import CustomAudioPlayerButtonComponent from '../shared/CustomAudioPlayerButtonComponent';
import color from '../../themes/color';
import {largeFontSize, descriptionFontSize} from '../../utils/font_size_util';
import uuidv4 from '../../utils/uuidv4_util';
import SurveyOption from '../../models/SurveyOption';

const SurveyQuestionComponent = (props) => {

  const renderTitle = () => {
    return <View style={{flexDirection: 'row'}}>
              <View style={{flex: 1, justifyContent: 'center'}}>
                <Text style={{marginBottom: 6, fontSize: largeFontSize()}}>{props.question.name}</Text>
                { props.question.hint && <Text style={{fontSize: 13, color: color.grayColor}}>{props.question.hint}</Text> }
              </View>
              <View style={{marginLeft: 4}}>
                {/* <CustomAudioPlayerButtonComponent
                  itemUuid={props.question.id}
                  audio={props.question.audio}
                  playingUuid={props.playingUuid}
                  updatePlayingUuid={props.updatePlayingUuid}
                /> */}
              </View>
           </View>
  }

  const QuestionComponents = {
    SelectOne: SurveySelectOneQuestionComponent,
    SelectMultiple: SurveySelectMultipleQuestionComponent,
    Text: SurveyTextQuestionComponent,
    // VoiceRecording: SurveyFormVoiceRecordComponent,
  };

  const renderQuestion = () => {
    const type = props.question.type.split('::')[1];
    if (typeof QuestionComponents[type] !== 'undefined') {
      return React.createElement(QuestionComponents[type], {
                key: uuidv4(),
                surveyUuid: props.surveyUuid,
                question: props.question,
                options: SurveyOption.findByQuestion(props.question.id),
                buttonColor: color.primaryColor,
                statisticPrefix: 'Survey',
                updateAnswer: (answer) => props.updateAnswers(answer),
            })
    }
  }

  return (
    <View style={{padding: 16, marginTop: 16, borderWidth: 1.5, borderColor: '#dbdbdb', borderRadius: 10, backgroundColor: color.whiteColor}}>
      { renderTitle() }
      { renderQuestion() }
    </View>
  )
}

export default SurveyQuestionComponent;