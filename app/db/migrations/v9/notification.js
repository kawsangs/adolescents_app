'use strict';

const NotificationSchema = {
  name: 'Notification',
  primaryKey: 'uuid',
  properties: {
    uuid: 'string',
    id: 'string?',
    title: 'string?',
    content: 'string?',
    createdAt: 'date',
    read: { type: 'bool', default: false },
    data: 'string?'
  }
}

export default NotificationSchema;