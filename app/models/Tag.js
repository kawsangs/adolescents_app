import BaseModel from './BaseModel';
import tags from '../db/json/tags.json';

const MODEL = "Tag";

class Tag {
  static seedData = () => {
    BaseModel.seedData(MODEL, this.#getFormattedTags());
  }

  static getAll = () => {
    return BaseModel.getAll(MODEL);
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