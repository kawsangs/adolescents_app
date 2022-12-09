import BaseModel from './BaseModel';
import videos from '../db/json/videos.json';

const MODEL = "Video"

class Video {
  static seedData = () => {
    BaseModel.seedData(MODEL, this.#getFormattedVideos());
  }

  static getAll = () => {
    return BaseModel.getAll(MODEL);
  }

  static findByUuid = (uuid) => {
    return BaseModel.findByUuid(MODEL, uuid);
  }

  static findByCategoryUuid = (categoryUuid) => {
    return BaseModel.findByAttr(MODEL, {video_category_uuid: `'${categoryUuid}'`}, '', {type: 'ASC', column: 'display_order'});
  }

  // private method
  static #getFormattedVideos = () => {
    let formattedVideos = [];
    videos.map(video => {
      formattedVideos.push({...video, uuid: video.id, video_category_uuid: !!video.video_category ? video.video_category.id : null})
    });
    return formattedVideos;
  }
}

export default Video;