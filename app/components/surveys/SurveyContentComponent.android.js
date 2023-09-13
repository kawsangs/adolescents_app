import React, {useEffect, useState} from 'react';
import {View, ScrollView} from 'react-native';

import SurveyQuestionComponent from './SurveyQuestionComponent';
import SurveyBottomButtonComponent from './SurveyBottomButtonComponent';
import SurveySection from '../../models/SurveySection';
import SurveyQuestion from '../../models/SurveyQuestion';

const SurveyContentComponent = (props) => {
  const sections = SurveySection.findByFormId(props.formId);
  const [currentSection, setCurrentSection] = useState(0);
  const [answers, setAnswers] = useState({});
  const [playingUuid, setPlayingUuid] = useState(null);
  const buttonRef = React.useRef(null);

  useEffect(() => {
    let formattedAnswers = {};
    sections.map((section, index) => {
      formattedAnswers[index] = {};
    });
    setAnswers(formattedAnswers)
  }, []);

  const updateAnswers = (key, answer) => {
    const newAnswers = answers;
    if (!!answer && !!answer.value)
      newAnswers[currentSection][key] = answer;
    else
      delete newAnswers[currentSection][key];

    setAnswers(newAnswers);
    buttonRef.current?.validateForm(currentSection, newAnswers, sections[currentSection].uuid);
  }

  const renderQuestions = () => {
    return SurveyQuestion.findBySectionId(sections[currentSection].uuid).map((question, index) => {
      const key = `section_${currentSection}_q_${index}`;
      return <SurveyQuestionComponent
                key={index}
                question={question}
                surveyUuid={props.surveyUuid}
                updateAnswers={(answer) => updateAnswers(key, answer)}
             />
    });
  }

  const goNextOrFinish = () => {
    setPlayingUuid(null);
    if (currentSection < sections.length - 1) {
      buttonRef.current?.validateForm(currentSection + 1, answers, sections[currentSection].uuid);
      setCurrentSection(currentSection + 1);
    }
    else if (currentSection == sections.length - 1) {
      console.log('==== Sumbit Survey to server ====')
      // new SurveyFormService().submitSurvey(answers, currentQuiz.uuid);
      // navigation.reset({ index: 1, routes: [{name: 'BottomTab'}, { name: 'NotificationListScreen' }]});
    }
  }

  return <View style={{height: '100%'}}>
          <ScrollView contentContainerStyle={{height: '100%'}}>
            {renderQuestions()}
          </ScrollView>
          <SurveyBottomButtonComponent ref={buttonRef} onPress={goNextOrFinish} />
        </View>
}

export default SurveyContentComponent;