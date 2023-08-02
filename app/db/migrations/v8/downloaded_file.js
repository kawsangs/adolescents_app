'use strict';

const DownloadedFileSchema = {
  name: 'DownloadedFile',
  primaryKey: 'uuid',
  properties: {
    uuid: 'string',
    name: 'string',
    type: 'string'
  }
}

export default DownloadedFileSchema;