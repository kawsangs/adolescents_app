'use strict';

const ThemeSchema = {
  name: 'Theme',
  primaryKey: 'id',
  properties: {
    id: 'string',
    name: 'string',
    description: 'string?',
    active: { type: 'bool', default: true },
    default: { type: 'bool', default: false },
    bg_color: 'string',
    text_color: 'string',
    button_color: 'string',
    nav_bar_color: 'string'
  }
}

export default ThemeSchema;