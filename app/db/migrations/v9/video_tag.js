'use strict';

const VideoTagSchema = {
  name: "VideoTag",
  primaryKey: "uuid",
  properties: {
    uuid: "string",
    name: "string",
    display_order: "int?"
  }
}

export default VideoTagSchema