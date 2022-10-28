import BaseModel from './BaseModel';
import topics from '../db/json/topics.json';
import modelHelper from '../helpers/model_helper';

class Question {
  static seedData = () => {
    BaseModel.seedData(Question.name, this.#getFormattedQuestions());
  }

  static findByUuid = (uuid) => {
    return BaseModel.findByUuid(Question.name, uuid);
  }

  static findByTopicUuid = (uuid) => {
    return [...BaseModel.findByAttr(Question.name, { topic_uuid: `'${uuid}'`})];
  }

  //private method
  static #getFormattedQuestions = () => {
    const formattedQuestions = [];

    topics.map(topic => {
      topic.questions.map(question => {
        formattedQuestions.push({...question, uuid: question.id, topic_uuid: question.topic_id, option_uuids: modelHelper.getItemUuids(question.options)})
      });
    });
    return formattedQuestions;
  }
}

export default Question;