'use strict';

const UserSchema = {
  name: 'User',
  primaryKey: 'uuid',
  properties: {
    uuid: 'string',
    id: 'string?',
    age: 'int',
    characteristic_code: 'string',
    registered_at: 'date',
    sync_status: 'int'    // 0 = unsynced, 1 = synced
  }
}

export default UserSchema;