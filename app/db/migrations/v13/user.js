'use strict';

const UserSchema = {
  name: 'User',
  primaryKey: 'uuid',
  properties: {
    uuid: 'string',
    id: 'string?',    // the user's id returned from the server
    gender: 'string?',
    age: 'int',
    province_id: 'string?',
    characteristics: {type:'list', objectType: 'mixed'},
    registered_at: 'date',
    synced: { type: 'bool', default: false },
    logged_in: { type: 'bool', default: true },
    anonymous: { type: 'bool', default: false },
    occupation: 'string?',
    education_level: 'string?',
    user_uuid: 'string?',
    reason_code: 'string?'
  }
}

export default UserSchema;