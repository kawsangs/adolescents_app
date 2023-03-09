'use strict';

const VideoAuthorSchema = {
  name: 'VideoAuthor',
  primaryKey: 'uuid',
  properties: {
    uuid: 'string',
    name: 'string',
    display_order: 'int'
  }
}

export default VideoAuthorSchema;