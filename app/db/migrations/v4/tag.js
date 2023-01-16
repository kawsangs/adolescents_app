'use strict';

const TagSchema = {
  name: 'Tag',
  primaryKey: 'uuid',
  properties: {
    uuid: 'string',
    name: 'string',
  }
}

export default TagSchema;