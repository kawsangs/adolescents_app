import BaseModel from './BaseModel';

const MODEL = "Question"

class Question {
  static seedData = (data) => {
    BaseModel.seedData(MODEL, data);
  }

  static findByUuid = (uuid) => {
    return BaseModel.findByUuid(MODEL, uuid);
  }

  static findByTopicUuid = (uuid) => {
    return BaseModel.findByAttr(MODEL, { topic_uuid: `'${uuid}'`});
  }
}

export default Question;