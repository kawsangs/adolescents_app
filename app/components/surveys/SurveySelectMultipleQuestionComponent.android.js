import React, {useEffect, useState} from 'react';
import {TouchableOpacity} from 'react-native';
import { Checkbox, Text } from 'react-native-paper';

import color from '../../themes/color';
import User from '../../models/User';

const SurveySelectMultipleQuestionComponent = (props) => {
  const {options} = props;
  const [answers, setAnswers] = useState([])

  useEffect(() => {
    setAnswers(getSelectedId())
  }, []);

  const getSelectedId = () => {
    let selectedIds = [];
    if (!!props.currentAnswer && !!props.currentAnswer.value) {
      props.currentAnswer.value.split(',').map(value => {
        const filteredOption = options.filter(option => option.value == value)[0]
        selectedIds.push(filteredOption.id)
      });
    }
    return selectedIds
  }

  const onPressCheckItem = (option, value) => {
    let newAnswers = [...answers] || [];
    let index = newAnswers.indexOf(value);

    if (index > -1)
      newAnswers.splice(index, 1);
    else
      newAnswers.push(value);

    setAnswers(newAnswers);
    let answerParams = {
      question_id: props.question.id,
      value: '',
      option_id: '',
      user_uuid: User.currentLoggedIn().uuid,
      survey_id: props.surveyUuid,
    }

    if (newAnswers.length > 0) {
      const answeredOptions = options.filter(option => newAnswers.includes(option.id.toString()));
      answerParams.value = answeredOptions.map(o => o.value).join(',');
      answerParams.option_id = answeredOptions.map(o => o.id).join(',');
    }
    props.updateAnswer(answerParams);
  }

  const renderOptions = () => {
    return options.map((option, index) => {
      return (
        <TouchableOpacity key={`check-box${index}`}
          onPress={() => onPressCheckItem(option, option.id.toString())}
          style={{flexDirection: 'row', alignItems: 'center', borderBottomWidth: 1, borderColor: color.lightGrayColor, paddingVertical: 6}}
        >
          <Checkbox.Item status={answers.includes(option.id.toString()) ? 'checked' : 'unchecked'} mode='android' uncheckedColor={color.primaryColor} color={color.secondaryColor}
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