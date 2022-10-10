'use strict';

const VideoCategorySchema = {
  name: "VideoCategory",
  primaryKey: "uuid",
  properties: {
    uuid: "string",
    id: "string?",
    name: "string",
    description: "string",
    url: "string",
    display_order: "int",
    video_category_id: "string?",
  }
}

export default VideoCategorySchema;