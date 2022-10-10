'use strict';

const VideoCategorySchema = {
  name: "VideoCategory",
  primaryKey: "uuid",
  properties: {
    uuid: "string",
    id: "string?",
    name: "string",
  }
}

export default VideoCategorySchema;