import BaseModel from './BaseModel';

class Question {
  static seedData = (data) => {
    BaseModel.seedData(Question.name, data);
  }

  static findByUuid = (uuid) => {
    return BaseModel.findByUuid(Question.name, uuid);
  }

  static findByTopicUuid = (uuid) => {
    return BaseModel.findByAttr(Question.name, { topic_uuid: `'${uuid}'`});
  }
}

export default Question;