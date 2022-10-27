import BaseModel from './BaseModel';
import topics from '../db/json/topics.json';

class Topic {
  static seedData = () => {
    BaseModel.seedData(Topic.name, this.#getFormattedTopics());
  }

  //private method
  static #getFormattedTopics = () => {
    let formattedTopics = [];

    topics.map(topic => {
      formattedTopics.push({ ...topic, uuid: topic.id, service_uuids: topic.service_ids, question_uuids: this.#getQuestionUuids(topic.questions) });
    });
    return formattedTopics;
  }

  static #getQuestionUuids = (questions) => {
    const uuids = [];
    questions.map(question => {
      uuids.push(question.id)
    });
    return uuids;
  }
}

export default Topic;