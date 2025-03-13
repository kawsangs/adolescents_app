'use strict';

const ThemeSchema = {
  name: 'Theme',
  primaryKey: 'id',
  properties: {
    id: 'string',
    name: 'string',
    status: 'string',
    default: { type: 'bool', default: false },
    primary_color: 'string',
    secondary_color: 'string',
    primary_text_color: 'string',
    secondary_text_color: 'string',
    published_at: 'date?',
    updated_at: 'date?'
  }
}

export default ThemeSchema;