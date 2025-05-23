'use strict';

const ThemeSchema = {
  name: 'Theme',
  primaryKey: 'uuid',
  properties: {
    uuid: 'string',
    id: 'string',
    name: 'string',
    status: 'string',
    default: { type: 'bool', default: false },
    page: 'int?',
    primary_color: 'string',
    secondary_color: 'string',
    primary_text_color: 'string',
    secondary_text_color: 'string',
    android_images: 'string?',
    ios_images: 'string?',
    updated_at: 'date?',
  }
}

export default ThemeSchema;