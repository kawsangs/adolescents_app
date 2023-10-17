import Survey from '../models/Survey';
import SurveyForm from '../models/SurveyForm';
import SurveyQuestion from '../models/SurveyQuestion';
import SurveyAnswer from '../models/SurveyAnswer';
import SurveySection from '../models/SurveySection';
import SurveyCriteria from '../models/SurveyCriteria';
import SurveyFormApi from '../api/surveyFormApi';
import SurveyApi from '../api/surveyApi';
import uuidv4 from '../utils/uuidv4_util';
import Comparator from '../utils/Comparator';
import surveyQuestionService from './survey_question_service';

const surveyService = (() => {
  return {
    findAndSave,
    finishSurvey,
    syncSurveys,
    isQuestionMatchCriterias,
  }

  function findAndSave(id, callback) {
    new SurveyFormApi().load(id, (res) => {
      _saveForm(res);
      _saveSectionsAndQuestions(res.sections, id, callback);
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

  function isQuestionMatchCriterias(question, answers, currentSection) {
    const criterias = SurveyCriteria.findByQuestion(question.id);
    if (criterias.length == 0)
      return true;

    let queries = [];
    criterias.map((criteria, index) => {
      let matchedAnswer = null;
      const comparator = Comparator.get(criteria.operator);

      for (let section in answers) {
        if (Object.keys(answers[section]).length == 0 || section > currentSection)
          break;

        for (let answerIndex in answers[section]) {
          if (answers[section][answerIndex].question_code == criteria.question_code) {
            matchedAnswer = answers[section][answerIndex];
            queries.push(comparator.compare(matchedAnswer.value, criteria.response_value).toString());
            break;
          }
        }
      }
    });

    if (queries.length < criterias.length && question.relevant == "AND")   // when there is no answer to compare with the criteria then mark it as false (for AND condition only)
      queries.push('false')

    let mainQuery = ''
    queries.map((qu, index) => {
      mainQuery += `${qu} ${index < queries.length - 1 ? OPERATORS[question.relevant] : ''}`
    })

    if (eval(mainQuery))
      return true

    return false
  }

  // private method
  function _saveForm (data) {
    const questionCount = data.sections.reduce((totalCount, item) => totalCount + item.questions.length, 0);
    SurveyForm.upsert({...data, question_count: questionCount})
  }

  function _saveSectionsAndQuestions(sections, topicId, callback) {
    sections.map(section => {
      SurveySection.upsert({ id: section.id, name: section.name, topic_id: topicId, display_order: section.display_order });
      const questions = section.questions.map(question => ({ ...question, topic_id: topicId }));
      SurveyQuestion.upsertCollection(questions);
    });
    surveyQuestionService.downloadAudioCollection(sections, callback);
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
      topic_id: survey.topic_id,
      quizzed_at: survey.surveyed_at,
      answers_attributes: answers_attributes
    }
  }
})();

export default surveyService;