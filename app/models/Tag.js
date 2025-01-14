import BaseModel from './BaseModel';
import tags from '../db/json/tags.json';

const MODEL = "Tag";

class Tag {
  static seedData = async () => {
    BaseModel.seedData(MODEL, this.#getFormattedTags());
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

  static deleteAll() {
    BaseModel.deleteAll(MODEL)
  }

  // private method
  static #getFormattedData = (tag) => {
    return {...tag, uuid: tag.id}
  }

  static #getFormattedTags = () => {
    let formattedTags = [];
    tags.map(tag => {
      formattedTags.push(this.#getFormattedData(tag));
    })
    return formattedTags;
  }
}

export default Tag;