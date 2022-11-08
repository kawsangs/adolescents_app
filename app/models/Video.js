import BaseModel from './BaseModel';
import videos from '../db/json/videos.json';

class Video {
  static seedData = () => {
    BaseModel.seedData(Video.name, this.#getFormattedVideos());
  }

  static getAll = () => {
    return BaseModel.getAll(Video.name);
  }

  static findByUuid = (uuid) => {
    return BaseModel.findByUuid(Video.name, uuid);
  }

  static findByCategoryUuid = (categoryUuid) => {
    return BaseModel.findByAttr(Video.name, {video_category_uuid: `'${categoryUuid}'`}, '', {type: 'ASC', column: 'display_order'});
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