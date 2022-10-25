'use strict';

const NotificationMessageSchema = {
  name: 'NotificationMessage',
  primaryKey: 'uuid',
  properties: {
    uuid: 'string',
    id: 'string?',
    title: 'string?',
    content: 'string?'
  }
}

export default NotificationMessageSchema;