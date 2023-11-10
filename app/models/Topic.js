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

  static containByName = (name) => {
    return BaseModel.containsByAttr(MODEL, 'name_km', `'${name}'`);
  }

  static create = (data) => {
    BaseModel.create(MODEL, data);
  }

  static update = (uuid, data) => {
    BaseModel.update(MODEL, uuid, data);
  }

  static deleteAll = () => {
    BaseModel.deleteAll(MODEL)
  }
}

export default Topic;