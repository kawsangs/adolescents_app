import BaseModel from './BaseModel';
import videoAuthors from '../db/json/video_authors.json';

const MODEL = "VideoAuthor";

class VideoAuthor {
  static seedData = async () => {
    BaseModel.seedData(MODEL, this.#getFormattedVideoAuthors());
  }

  static getAll = () => {
    return BaseModel.getAll(MODEL).sorted('display_order', false);
  }

  static findByUuid = (uuid) => {
    return BaseModel.findByUuid(MODEL, uuid);
  }

  static create = (data) => {
    BaseModel.create(MODEL, this.#getFormattedData(data))
  }

  static update = (uuid, data) => {
    const {id, ...cleanedData} = data
    BaseModel.update(MODEL, uuid, cleanedData)
  }

  // private method
  static #getFormattedData = (tag) => {
    return {...tag, uuid: tag.id}
  }

  static #getFormattedVideoAuthors = () => {
    let formattedData = [];
    videoAuthors.map(tag => {
      formattedData.push(this.#getFormattedData(tag));
    })
    return formattedData;
  }
}

export default VideoAuthor;