import BaseModel from './BaseModel';
import videoTags from '../db/json/video_tags.json';

const MODEL = 'VideoTag';

class VideoTag {
  static seedData = async () => {
    BaseModel.seedData(MODEL, this.#getFormattedParams());
  }

  static getAll = () => {
    return BaseModel.getAll(MODEL).sorted('display_order', false);
  }

  static findByUuid = (uuid) => {
    return BaseModel.findByUuid(MODEL, uuid);
  }

  static create = (data) => {
    BaseModel.create(MODEL, { ...data, uuid: data.id })
  }

  static update = (uuid, data) => {
    BaseModel.update(MODEL, uuid, data)
  }

  static deleteAll() {
    BaseModel.deleteAll(MODEL)
  }

  // private method
  static #getFormattedParams = () => {
    let formattedTags = [];
    videoTags.map(videoTag => {
      formattedTags.push({ ...videoTag, uuid: videoTag.id });
    })
    return formattedTags;
  }
}

export default VideoTag;