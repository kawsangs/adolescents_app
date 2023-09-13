import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import { Checkbox, View, Text } from 'react-native-paper';

import color from '../../themes/color';

const SurveySelectMultipleQuestionComponent = (props) => {
  const {options} = props;
  const [answers, setAnswers] = useState([])

  const renderOptions = () => {
    return options.map(option => {
      return (
        <TouchableOpacity
          style={{flexDirection: 'row', alignItems: 'center', borderBottomWidth: 1, borderColor: color.lightGrayColor, paddingVertical: 6}}
        >
          <Checkbox.Item status={props.selected ? 'checked' : 'unchecked'} value={props.value} style={{paddingLeft: 0}} />
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