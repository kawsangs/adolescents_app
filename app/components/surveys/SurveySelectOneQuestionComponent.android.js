
import React, {useState} from 'react';
import { RadioButton } from 'react-native-paper';
import RadioButtonComponent from '../shared/radioButtons/RadioButtonComponent';

const SurveySelectOneQuestionComponent = (props) => {
  const {options} = props;
  const [selectedOption, setSelectedOption] = useState(null);

  const onSelect = (id) => {
    const option = options.filter(o => o.id.toString() == id)[0]
    setSelectedOption(option);

    const answerParams = {
      question_id: props.question.id,
      question_code: props.question.code,
      value: option.value,
      score: option.score,
      user_uuid: props.currentUser.uuid,
      quiz_uuid: props.currentQuiz.uuid,
    }
    props.updateAnswer(answerParams);
  }

  return (
    <RadioButton.Group value={!!selectedOption ? selectedOption.id.toString() : null}>
      {
        options.map(option => {
          return <RadioButtonComponent
                    key={option.id}
                    label={option.name}
                    value={option.id.toString()}
                    onPress={(value) => onSelect(value)}
                    selectedValue={selectedOption}
                />
        })
      }
    </RadioButton.Group>
  )
}

export default SurveySelectOneQuestionComponent;