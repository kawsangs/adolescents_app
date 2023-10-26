'use strict';

const SurveySchema = {
  name: 'Survey',
  primaryKey: 'uuid',
  properties: {
    uuid: 'string',
    user_uuid: 'string',
    topic_id: 'string',
    surveyed_at: 'date',
    finished: 'bool?',
    uploaded_id: 'int?',
    notification_id: 'int?'
  }
};

export default SurveySchema;
