import BaseModel from './BaseModel';

const MODEL = "Survey";

class Survey {
  static findByUuid(uuid) {
    return BaseModel.findByUuid(MODEL, uuid);
  }

  static create(data) {
    BaseModel.create(MODEL, data);
  }

  static setFinished(uuid) {
    BaseModel.update(MODEL, uuid, { finished: true });
  }

  static deleteAll() {
    BaseModel.deleteAll(MODEL);
  }
}

export default Survey;