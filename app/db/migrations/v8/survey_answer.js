'use strict';

const SurveyAnswerSchema = {
  name: 'SurveyAnswer',
  primaryKey: 'uuid',
  properties: {
    uuid: 'string',
    question_id: 'int',
    question_code: 'string',
    value: 'string',
    score: { type: 'int', default: 0 },
    user_uuid: 'string',
    survey_uuid: 'string',
    voice: 'string?',
  }
};

export default SurveyAnswerSchema;
