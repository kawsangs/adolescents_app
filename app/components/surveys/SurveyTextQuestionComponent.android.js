import React, { useState, useEffect } from 'react';
import { TextInput } from 'react-native';

import color from '../../themes/color';
import User from '../../models/User';

const SurveyTextQuestionComponent = (props) => {
  const [answer, setAnswer] = useState('');

  useEffect(() => {
    setAnswer(!!props.currentAnswer ? props.currentAnswer.value : '');
  }, []);

  const updateAnswer = () => {
    if (!answer) return props.updateAnswer(null);

    const answerParams = {
      question_id: props.question.id,
      user_uuid: User.currentLoggedIn().uuid,
      survey_id: props.surveyUuid,
      value: answer || '',
      option_id: ''
    }
    props.updateAnswer(answerParams)
  }

  return <TextInput
            value={answer}
            style={{borderWidth: 1.5, paddingHorizontal: 10, marginTop: 10, borderRadius: 10, borderColor: !answer ? color.redColor : color.grayColor, height: 48}}
            onBlur={() => updateAnswer()}
            onChangeText={(value) => setAnswer(value)}
         />
}

export default SurveyTextQuestionComponent;