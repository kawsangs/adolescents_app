import BaseModel from './BaseModel';
import videoCategories from '../db/json/video_categories.json';

class VideoCategory extends BaseModel {
  static seedData = () => {
    BaseModel.seedData(VideoCategory.name, videoCategories);
  }

  static getAll = () => {
    return BaseModel.getAll(VideoCategory.name);
  }
}

export default VideoCategory;