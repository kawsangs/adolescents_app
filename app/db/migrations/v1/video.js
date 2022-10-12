'use strict';

const VideoSchema = {
  name: "Video",
  primaryKey: "uuid",
  properties: {
    uuid: "string",
    id: "string?",
    name: "string",
    description: "string",
    url: "string",
    display_order: "int",
    video_category_uuid: "string?",
  }
}

export default VideoSchema