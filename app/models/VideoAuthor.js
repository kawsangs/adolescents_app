import BaseModel from './BaseModel';
import videoAuthors from '../db/json/video_authors.json';

const MODEL = "VideoAuthor";

class VideoAuthor {
  static seedData = async () => {
    BaseModel.seedData(MODEL, this.#getFormattedVideoAuthors()).sorted('display_order', false);
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
    BaseModel.update(MODEL, uuid, data)
  }

  static getName = (uuid) => {
    const author = this.findByUuid(uuid)
    return !!author ? author.name : ''
  }

  // private method
  static #getFormattedData = (vidAuthor) => {
    return {...vidAuthor, uuid: vidAuthor.id}
  }

  static #getFormattedVideoAuthors = () => {
    let formattedData = [];
    videoAuthors.map(vidAuthor => {
      formattedData.push(this.#getFormattedData(vidAuthor));
    })
    return formattedData;
  }
}

export default VideoAuthor;