'use strict';

const FacilityImageSchema = {
  name: 'FacilityImage',
  primaryKey: 'uuid',
  properties: {
    uuid: 'string',
    name: 'string',
    path: 'string'
  }
}

export default FacilityImageSchema;