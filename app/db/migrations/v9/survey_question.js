'use strict';

const SurveyQuestionSchema = {
  name: 'SurveyQuestion',
  primaryKey: 'id',
  properties: {
    id: 'string',
    code: 'string?',
    type: 'string?',
    name: 'string?',
    display_order: 'int',
    hint: 'string?',
    relevant: 'string?',
    required: {type: 'bool', default: false},
    audio: 'string?',
    audio_url: 'string?',
    topic_id: 'string?',
    section_id: 'string?',
    criterias: 'string?',
  }
};

export default SurveyQuestionSchema;
