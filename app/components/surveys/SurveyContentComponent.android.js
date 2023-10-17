import React, {useEffect, useState, useRef} from 'react';
import {View, ScrollView} from 'react-native';

import SurveyQuestionComponent from './SurveyQuestionComponent';
import SurveyBottomButtonComponent from './SurveyBottomButtonComponent';
import SurveySection from '../../models/SurveySection';
import SurveyQuestion from '../../models/SurveyQuestion';
import surveyService from '../../services/survey_service';
import {navigationRef} from '../../navigators/app_navigator';

const SurveyContentComponent = (props) => {
  const sections = SurveySection.findByTopicId(props.topicId);
  const [currentSection, setCurrentSection] = useState(0);
  const [answers, setAnswers] = useState({});
  const [playingUuid, setPlayingUuid] = useState(null);
  const buttonRef = useRef(null);
  const visibleQuestions = useRef([]);

  useEffect(() => {
    let formattedAnswers = {};
    sections.map((section, index) => {
      formattedAnswers[index] = {};
    });
    setAnswers(formattedAnswers)
  }, []);

  const updateAnswers = (key, answer, questions) => {
    const newAnswers = answers;
    if (!!answer && !!answer.value)
      newAnswers[currentSection][key] = answer;
    else
      delete newAnswers[currentSection][key];

    setAnswers(newAnswers);
    setTimeout(() => {
      buttonRef.current?.validateForm(currentSection, visibleQuestions.current, questions);
    }, 200)
  }

  const handleSkipLogic = (key, index, isQuestionVisible, questionType, questions) => {
    if (isQuestionVisible) {
      visibleQuestions.current[index] = true;
      // Enable the bottom button if it is the note question
      if (questionType.toLowerCase() == 'note' && index == questions.length - 1)
        setTimeout(() => {
          buttonRef.current?.validateForm(currentSection, visibleQuestions.current, questions);
        }, 200);
    }
    else {
      // reset the answer of the question that is not visible
      visibleQuestions.current[index] = false;
      let newAnswers = {...answers};
      if (!!newAnswers[currentSection] && !!newAnswers[currentSection][key]) {
        delete newAnswers[currentSection][key];
        setAnswers(newAnswers)
      }
    }

    // Move to next section if the currenct section has no question matched with the criteria
    if (visibleQuestions.current.filter(q => q == true).length == 0 && index == questions.length - 1) {
      visibleQuestions.current = [];
      if (currentSection < sections.length - 1 )
        setCurrentSection(currentSection + 1);
    }
  }

  const renderQuestions = () => {
    const questions = SurveyQuestion.findBySectionId(sections[currentSection].id);
    return questions.map((question, index) => {
      const key = `section_${currentSection}_q_${index}`;
      const isQuestionVisible = surveyService.isQuestionMatchCriterias(question, answers, currentSection);
      handleSkipLogic(key, index, isQuestionVisible, question.type.split('::')[1], questions);

      return <SurveyQuestionComponent
                key={index}
                question={question}
                surveyUuid={props.surveyUuid}
                playingUuid={playingUuid}
                updateAnswers={(answer) => updateAnswers(key, answer, questions)}
                updatePlayingUuid={(uuid) => setPlayingUuid(uuid)}
             />
    });
  }

  const goNextOrFinish = () => {
    setPlayingUuid(null);
    if (currentSection < sections.length - 1) {
      visibleQuestions.current = [];
      buttonRef.current?.updateValidStatus(false);
      setCurrentSection(currentSection + 1);
    }
    else if (currentSection == sections.length - 1) {
      surveyService.finishSurvey(answers, props.surveyUuid);
      navigationRef.current?.goBack();
    }
  }

  return <View style={{height: '100%'}}>
          <ScrollView contentContainerStyle={{height: '100%'}}>
            {renderQuestions()}
          </ScrollView>
          <SurveyBottomButtonComponent ref={buttonRef}
            sections={sections}
            currentSection={currentSection}
            answers={answers}
            onPress={goNextOrFinish}
            playingUuid={playingUuid}
            updatePlayingUuid={(uuid) => setPlayingUuid(uuid)}
          />
        </View>
}

export default SurveyContentComponent;