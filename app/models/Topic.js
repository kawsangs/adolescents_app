import BaseModel from './BaseModel';

const MODEL = "Topic"

class Topic {
  static seedData = (data) => {
    BaseModel.seedData(MODEL, data);
  }

  static getAll = () => {
    return BaseModel.getAll(MODEL);
  }

  static findByUuid = (uuid) => {
    return BaseModel.findByUuid(MODEL, uuid);
  }
}

export default Topic;