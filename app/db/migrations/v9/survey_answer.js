'use strict';

const SurveyAnswerSchema = {
  name: 'SurveyAnswer',
  primaryKey: 'uuid',
  properties: {
    uuid: 'string',
    question_id: 'string',
    option_id: 'string?',
    value: 'string',
    user_uuid: 'string',
    survey_id: 'string',
    voice: 'string?',
  }
};

export default SurveyAnswerSchema;
