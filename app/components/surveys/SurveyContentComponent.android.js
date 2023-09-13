import React from 'react';
import {View} from 'react-native';

import SurveyQuestionComponent from './SurveyQuestionComponent';

const SurveyContentComponent = (props) => {

  const questions = [
    {
      uuid: 'abcde123',
      code: 'question1',
      name: 'តើការមានស្នេហាក្នុងវ័យសិក្សាមានផលប៉ះបាល់អ្វីខ្លះ?',
      type: 'Questions::SelectOne',
      hint: '',
      display_order: 1,
      audio: null,
      topic_uuid: '123',
      answers: [{ label: 'Answer 1', value: 1 }, { label: 'Answer 2', value: 2 }],
      option_uuids: null,
      form_id: 1,
      section_id: 'section1'
    },
    {
      uuid: 'abcde1233',
      code: 'question2',
      name: 'Survey multi select question 2?',
      type: 'Questions::SelectMultiple',
      hint: 'Hint of the survey question 2',
      display_order: 2,
      audio: null,
      topic_uuid: '123',
      answers: [{ label: 'Answer 1', value: 1 }, { label: 'Answer 2', value: 2 }],
      option_uuids: null,
      form_id: 1,
      section_id: 'section1'
    },
    {
      uuid: 'abcde1234',
      code: 'question3',
      name: 'Survey Text question 3?',
      type: 'Questions::Text',
      hint: 'Hint of the survey question 3',
      display_order: 2,
      audio: null,
      topic_uuid: '123',
      answers: [{ label: 'Answer 1', value: 1 }, { label: 'Answer 2', value: 2 }],
      option_uuids: null,
      form_id: 1,
      section_id: 'section2'
    },
    {
      uuid: 'abcde1235',
      code: 'question4',
      name: 'Survey multi select question 4?',
      type: 'Questions::SelectMultiple',
      hint: 'Hint of the survey question 4',
      display_order: 2,
      audio: null,
      topic_uuid: '123',
      answers: [{ label: 'Answer 1', value: 1 }, { label: 'Answer 2', value: 2 }],
      option_uuids: null,
      form_id: 1,
      section_id: 'section2'
    },
  ]
  const renderQuestions = () => {
    return questions.map((question, index) => {
      return <SurveyQuestionComponent
                key={index}
                question={question}
             />
    });
  }

  return <React.Fragment>
          {renderQuestions()}
        </React.Fragment>

  // return (
  //   <SurveyQuestionComponent
  //     question={question}
  //   />
  // )
}

export default SurveyContentComponent;