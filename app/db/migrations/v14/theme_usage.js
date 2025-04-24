'use strict';

const ThemeUsageSchema = {
  name: "ThemeUsage",
  primaryKey: 'uuid',
  properties: {
    uuid: 'string',
    user_uuid: 'string?',
    theme_id: 'string',
    applied_at: 'date'
  }
};

export default ThemeUsageSchema;