'use strict';

const SurveySectionSchema = {
  name: 'SurveySection',
  primaryKey: 'uuid',
  properties: {
    uuid: 'string',
    name: 'string',
    form_id: 'int',
    display_order: 'int',
  }
};

export default SurveySectionSchema;
