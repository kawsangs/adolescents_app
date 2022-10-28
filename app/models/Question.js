import BaseModel from './BaseModel';
import topics from '../db/json/topics.json';
import modelHelper from '../helpers/modelHelper';

class Question {
  static seedData = () => {
    BaseModel.seedData(Question.name, this.#getFormattedQuestions());
  }

  //private method
  static #getFormattedQuestions = () => {
    const formattedQuestions = [];

    topics.map(topic => {
      topic.questions.map(question => {
        formattedQuestions.push({...question, uuid: question.id, topic_uuid: question.topic_id, option_uuids: modelHelper.getItemUuids(question.options)})
      });
    });
  }
}

export default Question;