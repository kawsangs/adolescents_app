import BaseModel from './BaseModel';
import topics from '../db/json/topics.json';
import modelHelper from '../helpers/modelHelper';

class Topic {
  static seedData = () => {
    BaseModel.seedData(Topic.name, this.#getFormattedTopics());
  }

  //private method
  static #getFormattedTopics = () => {
    let formattedTopics = [];

    topics.map(topic => {
      formattedTopics.push({ ...topic, uuid: topic.id, service_uuids: topic.service_ids, question_uuids: modelHelper.getItemUuids(topic.questions) });
    });
    return formattedTopics;
  }
}

export default Topic;