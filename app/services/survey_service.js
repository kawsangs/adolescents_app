import SurveyForm from '../models/SurveyForm';
import SurveyQuestion from '../models/SurveyQuestion';
import SurveyOption from '../models/SurveyOption';
import SurveySection from '../models/SurveySection';

import {questions, form, sections, options} from '../db/data/survey_sample_data';

const surveyService = (() => {
  return {
    seedStaticData
  }

  function seedStaticData() {
    SurveyForm.create(form);
    sections.map(section => {
      SurveySection.create(section);
    });
    questions.map(question => {
      SurveyQuestion.create(question);
    });
    options.map(option => {
      SurveyOption.create(option);
    })
  }
})();

export default surveyService;