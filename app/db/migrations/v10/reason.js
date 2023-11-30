'use strict';

const ReasonSchema = {
  name: 'Reason',
  primaryKey: 'id',
  properties: {
    id: 'string',
    code: 'string?',
    name_km: 'string',
    name_en: 'string',
    updated_at: 'date?'
  }
}

export default ReasonSchema;