'use strict';

const ServiceSchema = {
  name: 'Service',
  primaryKey: 'uuid',
  properties: {
    uuid: 'string',
    id: 'string?',
    name: 'string',
  }
}

export default ServiceSchema;