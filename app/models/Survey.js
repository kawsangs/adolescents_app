import BaseModel from './BaseModel';

const MODEL = "Survey";

class Survey {
  static getUnfinished() {
    return [...BaseModel.findByAttr(MODEL, {finished: false})];
  }

  static getFinished() {
    return [...BaseModel.findByAttr(MODEL, {finished: true})];
  }

  static findByUuid(uuid) {
    return BaseModel.findByUuid(MODEL, uuid);
  }

  static findByTopicId(topicId) {
    return BaseModel.findByAttr(MODEL, {topic_id: `'${topicId}'`}, '', {});
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