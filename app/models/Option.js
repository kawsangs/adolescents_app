import BaseModel from './BaseModel';

class Option {
  static seedData = (data) => {
    BaseModel.seedData(Option.name, data);
  }

  static findByQuestionUuid = (uuid) => {
    return [...BaseModel.findByAttr(Option.name, { question_uuid: `'${uuid}'` })];
  }

  static findByUuid = (uuid) => {
    return BaseModel.findByUuid(Option.name, uuid);
  }
}

export default Option;