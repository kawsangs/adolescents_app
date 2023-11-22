'use strict';

const SurveyFormSchema = {
  name: 'SurveyForm',
  primaryKey: 'id',
  properties: {
    id: 'string',       // is the topic_id get from the push notification payload
    code: 'string?',
    name_km: 'string?',
    name_en: 'string?',
    description: 'string?',
    version: 'string?',
    question_count: 'int?',
    audio: 'string?',
    audio_url: 'string?',
    app_version: 'string?',
  }
};

export default SurveyFormSchema;
