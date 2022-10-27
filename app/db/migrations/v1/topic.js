'use strict';

const TopicSchema = {
  name: 'Topic',
  primaryKey: 'uuid',
  properties: {
    uuid: 'string',
    name: 'string',
    published_at: 'date?',
    audio: 'string?',
    code: 'string?',
    service_uuids: { type: 'string[]', default: [], optional: true },
    question_uuids: { type: 'string[]', default: [], optional: true }
  }
}

export default TopicSchema;