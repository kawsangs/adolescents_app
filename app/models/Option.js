import BaseModel from './BaseModel';

const MODEL = "Option"

class Option {
  static seedData = (data) => {
    BaseModel.seedData(MODEL, data);
  }

  static findByQuestionUuid = (uuid) => {
    return [...BaseModel.findByAttr(MODEL, { question_uuid: `'${uuid}'` })];
  }

  static findByUuid = (uuid) => {
    return BaseModel.findByUuid(MODEL, uuid);
  }
}

export default Option;