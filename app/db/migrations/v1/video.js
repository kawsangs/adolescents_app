'use strict';

const VideoSchema = {
  name: "Video",
  primaryKey: "uuid",
  properties: {
    uuid: "string",
    name: "string",
    url: "string",
    display_order: "int?",
    video_category_uuid: "string?",
    author: 'string?'
  }
}

export default VideoSchema