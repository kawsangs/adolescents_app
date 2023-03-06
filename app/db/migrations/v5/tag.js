'use strict';

const TagSchema = {
  name: 'Tag',
  primaryKey: 'uuid',
  properties: {
    uuid: 'string',
    name: 'string',
    display_order: 'int'
  }
}

export default TagSchema;