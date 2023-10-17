'use strict';

const SurveyCriteriaSchema = {
  name: 'SurveyCriteria',
  primaryKey: 'id',
  properties: {
    id: 'string',
    question_id: 'string',
    question_code: 'string?',
    operator: 'string?',
    response_value: 'string',
  }
};

export default SurveyCriteriaSchema;
