'use strict';

const SurveySchema = {
  name: 'Survey',
  primaryKey: 'uuid',
  properties: {
    uuid: 'string',
    user_uuid: 'string',
    form_id: 'int',
    surveyed_at: 'date',
    finished: 'bool?',
    uploaded_id: 'int?'
  }
};

export default SurveySchema;
