import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-paper';

import SurveySelectOneQuestionComponent from './SurveySelectOneQuestionComponent';
import SurveySelectMultipleQuestionComponent from './SurveySelectMultipleQuestionComponent';
import SurveyTextQuestionComponent from './SurveyTextQuestionComponent';
import SurveyVoiceRecordQuestionComponent from './SurveyVoiceRecordQuestionComponent';
import SurveyNoteComponent from './SurveyNoteComponent';
import CustomAudioPlayerButtonComponent from '../shared/CustomAudioPlayerButtonComponent';
import color from '../../themes/color';
import {largeFontSize} from '../../utils/font_size_util';
import uuidv4 from '../../utils/uuidv4_util';
import SurveyOption from '../../models/SurveyOption';

const SurveyQuestionComponent = (props) => {
  const renderTitle = () => {
    return <View style={{flexDirection: 'row', borderWidth: 0}}>
              <View style={{flex: 1, justifyContent: 'center'}}>
                <Text style={{marginBottom: 6, fontSize: largeFontSize(), lineHeight: 26}}>{props.question.name}</Text>
                { props.question.hint && <Text style={{fontSize: 13, color: color.grayColor, lineHeight: 22}}>{props.question.hint}</Text> }
              </View>
              <View style={{marginLeft: 4}}>
                <CustomAudioPlayerButtonComponent
                  rippled={true}
                  itemUuid={props.question.id}
                  audio={ !!props.question.audio ? {uri: props.question.audio} : null}
                />
              </View>
           </View>
  }

  const QuestionComponents = {
    SelectOne: SurveySelectOneQuestionComponent,
    SelectMultiple: SurveySelectMultipleQuestionComponent,
    Text: SurveyTextQuestionComponent,
    VoiceRecording: SurveyVoiceRecordQuestionComponent,
    Note: SurveyNoteComponent,
  };

  const renderQuestion = () => {
    const type = props.question.type.split('::')[1];
    if (typeof QuestionComponents[type] !== 'undefined') {
      return React.createElement(QuestionComponents[type], {
                key: uuidv4(),
                surveyUuid: props.surveyUuid,
                question: props.question,
                options: SurveyOption.findAllByQuestion(props.question.id),
                buttonColor: color.primaryColor,
                statisticPrefix: 'Survey',
                currentAnswer: props.currentAnswer,
                updateAnswer: (answer) => props.updateAnswers(answer),
            })
    }
  }

  if (props.isVisible) {
    return (
      <View style={{padding: 16, marginBottom: 16, borderWidth: 1.5, borderColor: '#dbdbdb', borderRadius: 10, backgroundColor: color.whiteColor}}>
        { renderTitle() }
        { renderQuestion() }
      </View>
    )
  }

  return;
}

export default SurveyQuestionComponent;