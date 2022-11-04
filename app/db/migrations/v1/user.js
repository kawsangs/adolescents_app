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
    characteristics: {type:'string[]', default: [], optional: true },
    registered_at: 'date',
    synced: { type: 'bool', default: false },
    logged_in: { type: 'bool', default: true },
    anonymous: { type: 'bool', default: false },
  }
}

export default UserSchema;