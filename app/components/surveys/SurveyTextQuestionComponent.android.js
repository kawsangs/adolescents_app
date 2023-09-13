import React, { useState } from 'react';
import { TextInput } from 'react-native';
// import {useSelector} from 'react-redux';

import color from '../../themes/color';

const SurveyTextQuestionComponent = (props) => {
  const [answer, setAnswer] = useState('');
  // const currentUser = useSelector(state => state.currentUser)
  // const currentQuiz = useSelector(state => state.currentQuiz)

  const onTextChange = (text) => {
    setAnswer(text);
    if (!text) return props.updateAnswer(null);

    const answerParams = {
      question_id: props.question.id,
      question_code: props.question.code,
      user_uuid: props.currentUser.uuid,
      quiz_uuid: props.currentQuiz.uuid,
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