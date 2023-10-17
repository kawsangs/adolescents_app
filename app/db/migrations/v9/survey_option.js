'use strict';

const SurveyOptionSchema = {
  name: 'SurveyOption',
  primaryKey: 'id',
  properties: {
    id: 'string',
    name: 'string',
    question_id: 'string',
    value: 'string',
  }
};

export default SurveyOptionSchema;