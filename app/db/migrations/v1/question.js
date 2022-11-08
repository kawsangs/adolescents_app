'use strict';

const QuestionSchema = {
  name: 'Question',
  primaryKey: 'uuid',
  properties: {
    uuid: 'string',
    code: 'string?',
    name: 'string',
    type: 'string',
    hint: 'string?',
    display_order: 'int',
    audio: 'string?',
    topic_uuid: 'string',
    answer: 'string?',
    option_uuids: { type: 'string[]', default: [], optional: true }
  }
}

export default QuestionSchema;