'use strict';

const SurveySectionSchema = {
  name: 'SurveySection',
  primaryKey: 'id',
  properties: {
    id: 'string',
    name: 'string?',
    topic_id: 'string',
    display_order: 'int',
  }
};

export default SurveySectionSchema;
