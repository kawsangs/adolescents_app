'use strict';

const VideoCategorySchema = {
  name: "VideoCategory",
  primaryKey: "uuid",
  properties: {
    uuid: "string",
    name: "string",
  }
}

export default VideoCategorySchema;