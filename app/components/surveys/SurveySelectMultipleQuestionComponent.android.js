import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import { Checkbox, Text } from 'react-native-paper';

import color from '../../themes/color';
import User from '../../models/User';

const SurveySelectMultipleQuestionComponent = (props) => {
  const {options} = props;
  const [answers, setAnswers] = useState([])

  const onPressCheckItem = (option, value) => {
    let newAnswers = [...answers] || [];
    let index = newAnswers.indexOf(value);

    if (index > -1)
      newAnswers.splice(index, 1);
    else
      newAnswers.push(value);

    setAnswers(newAnswers);
    let answerParams = {
      question_id: option.question_id,
      question_code: option.question_code,
      value: '',
      score: 0,
      user_uuid: User.currentLoggedIn().uuid,
      survey_uuid: props.surveyUuid,
    }

    if (newAnswers.length > 0) {
      const answeredOptions = options.filter(option => newAnswers.includes(option.id.toString()));
      answerParams.value = answeredOptions.map(o => o.value).join(',');
    }
    props.updateAnswer(answerParams);
  }

  const renderOptions = () => {
    return options.map(option => {
      return (
        <TouchableOpacity
          onPress={() => onPressCheckItem(option, option.id.toString())}
          style={{flexDirection: 'row', alignItems: 'center', borderBottomWidth: 1, borderColor: color.lightGrayColor, paddingVertical: 6}}
        >
          <Checkbox.Item status={answers.includes(option.id.toString()) ? 'checked' : 'unchecked'}
            value={option.id.toString()} style={{paddingLeft: 0}}
          />
          <Text style={{flexShrink: 1}}>{option.name}</Text>
        </TouchableOpacity>
      )
    });
  }

  return (
    <React.Fragment>
      { renderOptions() }
    </React.Fragment>
  )
}

export default SurveySelectMultipleQuestionComponent;