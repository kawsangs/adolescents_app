import Survey from '../models/Survey';
import SurveyForm from '../models/SurveyForm';
import SurveyQuestion from '../models/SurveyQuestion';
import SurveyAnswer from '../models/SurveyAnswer';
import SurveyOption from '../models/SurveyOption';
import SurveySection from '../models/SurveySection';
import SurveyFormApi from '../api/surveyFormApi';
import uuidv4 from '../utils/uuidv4_util';

import {questions, form, sections, options} from '../db/data/survey_sample_data';

const surveyService = (() => {
  return {
    seedStaticData,
    findAndSave,
    submitSurvey,
  }

  function findAndSave(id, callback) {
    new SurveyFormApi().load(id, (res) => {
      console.log('== find survey form success = ', res)
      const data = JSON.parse(res.data);
      _saveForm(data);
      _saveSectionsAndQuestions(data.sections, id, callback);
    }, (error) => {
      console.log('== find survey error = ', error)
    });
  }

  function submitSurvey(answers, surveyUuid) {
    _saveAnswer(answers, () => {
      Survey.setFinished(surveyUuid);
    });
  }

  // private method
  function _saveForm (data) {
    const questionCount = data.sections.reduce((totalCount, item) => totalCount + item.questions.length, 0);
    SurveyForm.upsert({...data, question_count: questionCount})
  }

  function _saveSectionsAndQuestions(sections, formId, callback) {
    sections.map(section => {
      SurveySection.upsert({ id: section.id, name: section.name, form_id: formId, display_order: section.display_order });
      const questions = section.questions.map(question => ({ ...question, form_id: formId }));
      SurveyQuestion.upsertCollection(questions);
    });
    // questionService.downloadAudioCollection(sections, callback);
  }

  function _saveAnswer(answers, callback) {
    const sections = Object.keys(answers);
    sections.map(section => {
      for (let key in answers[section]) {
        SurveyAnswer.upsert({...answers[section][key], uuid: uuidv4()})
      }
    })
    !!callback && callback();
  }

  function seedStaticData() {
    SurveyForm.upsert(form);
    sections.map(section => {
      SurveySection.upsert(section);
    });
    questions.map(question => {
      SurveyQuestion.upsert(question);
    });
    options.map(option => {
      SurveyOption.upsert(option);
    })
  }
})();

export default surveyService;