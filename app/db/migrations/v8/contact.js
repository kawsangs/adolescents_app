'use strict';

const ContactSchema = {
  name: 'Contact',
  primaryKey: 'uuid',
  properties: {
    uuid: 'string',
    name: 'string',
    type: 'string',
    value: 'string',
    display_order: 'int',
    contact_directory_id: 'string?'
  }
}

export default ContactSchema;