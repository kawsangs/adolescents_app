import BaseModel from './BaseModel';

const MODEL = "Survey";

class Survey {
  static getUnfinished() {
    return [...BaseModel.findByAttr(MODEL, {finished: false})];
  }

  static findByUuid(uuid) {
    return BaseModel.findByUuid(MODEL, uuid);
  }

  static create(data) {
    BaseModel.create(MODEL, data);
  }

  static setFinished(uuid) {
    BaseModel.update(MODEL, uuid, { finished: true });
  }

  static deleteByUuid(uuid) {
    BaseModel.deleteByUuid(MODEL, uuid);
  }

  static deleteAll() {
    BaseModel.deleteAll(MODEL);
  }
}

export default Survey;