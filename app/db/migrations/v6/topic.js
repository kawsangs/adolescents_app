'use strict';

const TopicSchema = {
  name: 'Topic',
  primaryKey: 'uuid',
  properties: {
    uuid: 'string',
    published_at: 'date?',
    audio: 'string?',
    code: 'string?',
    service_uuids: { type: 'string[]', default: [], optional: true },
    question_uuids: { type: 'string[]', default: [], optional: true },
    name_km: 'string',
    name_en: 'string'
  }
}

export default TopicSchema;