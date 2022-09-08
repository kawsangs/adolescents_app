'use strict';

const UserSchema = {
  name: 'User',
  primaryKey: 'uuid',
  properties: {
    uuid: 'string',
    id: 'string?',
    gender: 'string?',
    age: 'int',
    province_id: 'string?',
    characteristics: {type:'string[]', default: [] },
    registered_at: 'date',
    synced: { type: 'bool', default: false },
    logged_in: { type: 'bool', default: true }
  }
}

export default UserSchema;