import topics from '../db/json/topics.json';
import Topic from '../models/Topic';
import Question from '../models/Question';
import Option from '../models/Option';
import modelHelper from '../helpers/model_helper';

const topicSeedDataService = (() => {
  return {
    seedToRealm
  }

  function seedToRealm() {
    const formattedTopics = [];
    const formattedQuestions = [];
    const formattedOptions = [];

    topics.map(topic => {
      formattedTopics.push({ ...topic, uuid: topic.id, service_uuids: topic.service_ids, question_uuids: modelHelper.getItemUuids(topic.questions) });
      topic.questions.map(question => {
        formattedQuestions.push({...question, uuid: question.id, topic_uuid: question.topic_id, option_uuids: modelHelper.getItemUuids(question.options)});
        question.options.map(option => {
          formattedOptions.push({...option, uuid: option.id, question_uuid: option.question_id});
        })
      });
    });

    Topic.seedData(formattedTopics);
    Question.seedData(formattedQuestions);
    Option.seedData(formattedOptions);
  }
})();

export default topicSeedDataService;