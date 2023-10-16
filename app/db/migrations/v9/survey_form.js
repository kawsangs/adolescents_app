'use strict';

const SurveyFormSchema = {
  name: 'SurveyForm',
  primaryKey: 'id',
  properties: {
    id: 'string',
    code: 'string',
    name: 'string',
    version: 'string?',
    question_count: 'int?',
    audio: 'string?',
    audio_url: 'string?',
    app_version: 'string?',
  }
};

export default SurveyFormSchema;
