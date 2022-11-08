import BaseModel from './BaseModel';
import videoCategories from '../db/json/video_categories.json';

class VideoCategory {
  static seedData = () => {
    BaseModel.seedData(VideoCategory.name, this.#getFormattedVideoCategories());
  }

  static getAll = () => {
    return BaseModel.getAll(VideoCategory.name);
  }

  // private method
  static #getFormattedVideoCategories = () => {
    let formattedVideoCategories = [];

    videoCategories.map(videoCategory => {
      formattedVideoCategories.push({...videoCategory, uuid: videoCategory.id});
    });

    return formattedVideoCategories;
  }
}

export default VideoCategory;