import Survey from '../models/Survey';
import SurveyForm from '../models/SurveyForm';
import SurveyQuestion from '../models/SurveyQuestion';
import SurveyAnswer from '../models/SurveyAnswer';
import SurveyOption from '../models/SurveyOption';
import SurveySection from '../models/SurveySection';
import SurveyFormApi from '../api/surveyFormApi';
import SurveyApi from '../api/surveyApi';
import uuidv4 from '../utils/uuidv4_util';

import {questions, form, sections, options} from '../db/data/survey_sample_data';

const surveyService = (() => {
  return {
    seedStaticData,
    findAndSave,
    finishSurvey,
    syncSurveys,
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

  function finishSurvey(answers, surveyUuid) {
    _saveAnswer(answers, () => {
      Survey.setFinished(surveyUuid);
    });
  }

  function syncSurveys() {
    const surveyApi = new SurveyApi();
    _syncSurvey(0, Survey.getUnfinished(), surveyApi)
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

  function _syncSurvey(index, surveys, surveyApi) {
    if (index == surveys.length) return;

    surveyApi.post(surveyApi.listingUrl(), _buildParams(surveys[index]), (res) => {
      console.log('== upload survey success = ', res)
      // delete the survey from relam after submitted to server successfully
      Survey.deleteByUuid(surveys[index].uuid);
    }, (error) => {
      console.log('== upload survey error = ', error)
    })
  }

  function _buildParams(survey, surveyAnswers) {
    const answers_attributes = SurveyAnswer.findBySurvey(survey.uuid).map(answer => {
      return {
        uuid: answer.uuid,
        question_id: answer.question_id,
        question_code: answer.question_code,
        value: answer.value,
        score: answer.score,
        user_uuid: answer.user_uuid,
        quiz_uuid: answer.survey_uuid
      }
    });

    return {
      id: survey.uploaded_id,
      uuid: survey.uuid,
      user_uuid: survey.user_uuid,
      form_id: survey.form_id,
      quizzed_at: survey.surveyed_at,
      answers_attributes: answers_attributes
    }
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