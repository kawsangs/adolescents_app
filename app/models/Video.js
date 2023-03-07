import BaseModel from './BaseModel';
import videos from '../db/json/videos.json';
import {itemsPerPage} from '../constants/sync_data_constant';

const MODEL = "Video"

class Video {
  static seedData = () => {
    BaseModel.deleteAll(MODEL)
  
    BaseModel.seedData(MODEL, this.#getFormattedVideos());
  }

  static getAll = () => {
    return BaseModel.getAll(MODEL).sorted('display_order', false);
  }

  static findByUuid = (uuid) => {
    return BaseModel.findByUuid(MODEL, uuid);
  }

  static findByCategoryUuid = (categoryUuid) => {
    return BaseModel.findByAttr(MODEL, {video_category_uuid: `'${categoryUuid}'`}, '', {type: 'ASC', column: 'display_order'});
  }

  static findByAuthor = (authorName) => {
    return BaseModel.findByAttr(MODEL, { author: `"${authorName}"` })
  }

  static create = (data) => {
    BaseModel.create(MODEL, this.#getFormattedData(data, true))
  }

  static update = (uuid, data) => {
    BaseModel.update(MODEL, uuid, this.#getFormattedData(data, false))
  }

  static getStartingPage = () => {
    const numOfLocalFacility = this.getAll().length
    return numOfLocalFacility == 0 ? 1 : Math.floor(numOfLocalFacility/itemsPerPage)
  }

  // private method
  static #getFormattedData = (video, isCreate) => {
    if (isCreate)
      return {...video, uuid: video.id, video_category_uuid: !!video.video_category ? video.video_category.id : null}

    return {...video, video_category_uuid: !!video.video_category ? video.video_category.id : null}
  }

  static #getFormattedVideos = () => {
    let formattedVideos = [];
    videos.map(video => {
      formattedVideos.push(this.#getFormattedData(video, true))
      // formattedVideos.push({...video, uuid: video.id, video_category_uuid: !!video.video_category ? video.video_category.id : null})
    });
    return formattedVideos;
  }
}

export default Video;