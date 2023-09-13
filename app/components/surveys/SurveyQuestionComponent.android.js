import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-paper';

import SurveySelectOneQuestionComponent from './SurveySelectOneQuestionComponent';
import SurveySelectMultipleQuestionComponent from './SurveySelectMultipleQuestionComponent';
import SurveyTextQuestionComponent from './SurveyTextQuestionComponent';
import color from '../../themes/color';
import {largeFontSize, descriptionFontSize} from '../../utils/font_size_util';
import uuidv4 from '../../utils/uuidv4_util';

const SurveyQuestionComponent = (props) => {

  const renderTitle = () => {
    return <View style={{flexDirection: 'row'}}>
              <View style={{flex: 1, justifyContent: 'center'}}>
                <Text style={{marginBottom: 6, fontSize: largeFontSize()}}>{props.question.name}</Text>
                { props.question.hint && <Text style={{fontSize: 13, color: color.grayColor}}>{props.question.hint}</Text> }
              </View>
              <View style={{marginLeft: 4}}>
                {/* <CustomAudioPlayerComponent
                  itemUuid={props.question.id}
                  audio={props.question.audio}
                  buttonBackgroundColor={color.primaryColor}
                  isOutline={true}
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
    const options = {
      SelectOne: [
        {
          id: 1,
          name: 'Option 1',
          value: '1',
          score: 0,
          alert_message: null,
          alert_audio: null,
          alert_audio_url: null,
          warning: false,
          recursive: false,
          question_id: '1',
          question_code: "q1"
        },
        {
          id: 2,
          name: 'Option 2',
          value: '2',
          score: 0,
          alert_message: null,
          alert_audio: null,
          alert_audio_url: null,
          warning: false,
          recursive: false,
          question_id: '1',
          question_code: "q1"
        }
      ],
      SelectMultiple: [
        {
          id: 1,
          name: 'Check option 1',
          value: '1',
          score: 0,
          alert_message: null,
          alert_audio: null,
          alert_audio_url: null,
          warning: false,
          recursive: false,
          question_id: '1',
          question_code: "q1"
        },
        {
          id: 2,
          name: 'Check option 2',
          value: '2',
          score: 0,
          alert_message: null,
          alert_audio: null,
          alert_audio_url: null,
          warning: false,
          recursive: false,
          question_id: '1',
          question_code: "q1"
        },
        {
          id: 3,
          name: 'Check option 3',
          value: '3',
          score: 0,
          alert_message: null,
          alert_audio: null,
          alert_audio_url: null,
          warning: false,
          recursive: false,
          question_id: '1',
          question_code: "q1"
        }
      ]
    }

    const type = props.question.type.split('::')[1];
    if (typeof QuestionComponents[type] !== 'undefined') {
      return React.createElement(QuestionComponents[type], {
                key: uuidv4(),
                question: props.question,
                // options: Option.byQuestion(props.question.id),
                options: options[type],
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