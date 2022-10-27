'use strict'

const OptionSchema = {
  name: 'Option',
  primaryKey: 'uuid',
  properties: {
    uuid: 'string',
    name: 'string',
    message: 'string',
    move_next: { type: 'bool', default: true },
    question_uuid: 'string'
  }
}

export default OptionSchema;