import BaseModel from './BaseModel';
import topics from '../db/json/topics.json';

class Option {
  static seedData = () => {
    BaseModel.seedData(Option.name, this.#getFormattedOptions());
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
  }
}

export default Option;