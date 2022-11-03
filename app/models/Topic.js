import BaseModel from './BaseModel';

class Topic {
  static seedData = (data) => {
    BaseModel.seedData(Topic.name, data);
  }

  static getAll = () => {
    return BaseModel.getAll(Topic.name);
  }

  static findByUuid = (uuid) => {
    return BaseModel.findByUuid(Topic.name, uuid);
  }
}

export default Topic;