'use strict';

const ContactSchema = {
  name: 'Contact',
  primaryKey: 'uuid',
  properties: {
    uuid: 'string',
    id: 'string?',    // the user's id returned from the server
    type: 'string',
    value: 'string',
    display_order: 'int',
    contact_directory_id: 'string?'
  }
}

export default ContactSchema;