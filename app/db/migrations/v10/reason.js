'use strict';

const ReasonSchema = {
  name: 'Reason',
  primaryKey: 'id',
  properties: {
    id: 'string',
    code: 'string?',
    name_km: 'string',
    name_en: 'string',
    deleted_at: 'date?',
    updated_at: 'date?'
  }
}

export default ReasonSchema;