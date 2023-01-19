import BaseModel from './BaseModel';
import tags from '../db/json/tags.json';

const MODEL = "Tag";

class Tag {
  static seedData = () => {
    BaseModel.deleteAll(MODEL);
    BaseModel.seedData(MODEL, this.#getFormattedTags());
  }

  static getAll = () => {
    return BaseModel.getAll(MODEL);
  }

  static findByUuid = (uuid) => {
    return BaseModel.findByUuid(MODEL, uuid);
  }

  // private method
  static #getFormattedTags = () => {
    let formattedTags = [];
    tags.map(tag => {
      formattedTags.push({...tag, uuid: tag.id});
    })
    return formattedTags;
  }
}

export default Tag;