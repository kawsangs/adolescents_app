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
    author_uuid: 'string?',
    tag_list: 'string?',
    author_name: 'string?',
  }
}

export default VideoSchema