import BaseModel from './BaseModel';
import topics from '../db/json/topics.json';

class Option {
  static seedData = () => {
    BaseModel.seedData(Option.name, this.#getFormattedOptions());
  }

  static findByQuestionUuid = (uuid) => {
    return [...BaseModel.findByAttr(Option.name, { question_uuid: `'${uuid}'` })];
  }

  static findByUuid = (uuid) => {
    return BaseModel.findByUuid(Option.name, uuid);
  }

  //private method
  static #getFormattedOptions = () => {
    const formattedOptions = [];
    topics.map(topic => {
      topic.questions.map(question => {
        question.options.map(option => {
          formattedOptions.push({...option, uuid: option.id, question_uuid: option.question_id})
        })
      });
    });
    return formattedOptions;
  }
}

export default Option;