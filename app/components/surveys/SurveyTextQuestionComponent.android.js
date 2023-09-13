import React, { useState } from 'react';
import { TextInput } from 'react-native';
// import {useSelector} from 'react-redux';

import color from '../../themes/color';
import User from '../../models/User';


const SurveyTextQuestionComponent = (props) => {
  const [answer, setAnswer] = useState('');

  const onTextChange = (text) => {
    setAnswer(text);
    if (!text) return props.updateAnswer(null);

    const answerParams = {
      question_id: props.question.id,
      question_code: props.question.code,
      user_uuid: User.currentLoggedIn().uuid,
      survey_uuid: props.surveyUuid,
      value: text || '',
    }
    props.updateAnswer(answerParams)
  }

  return <TextInput
            value={answer}
            style={{borderWidth: 1.5, paddingHorizontal: 10, marginTop: 10, borderRadius: 10, borderColor: !answer ? color.redColor : color.grayColor}}
            onChangeText={(value) => onTextChange(value)}
         />
}

export default SurveyTextQuestionComponent;