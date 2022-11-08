import Topic from '../models/Topic';
import Facility from '../models/Facility';
import Question from '../models/Question';

const topicHelper = (() => {
  return {
    getRelatedServiceUuids,
    getFacilitiesByTopic,
    getNextQuestion,
  }

  function getRelatedServiceUuids() {
    const services = [];
    Topic.getAll().map(topic => {
      services.push(...topic.service_uuids)
    });

    return services.filter((service, index) => services.indexOf(service) == index);
  }

  function getFacilitiesByTopic(topicUuid) {
    const serviceUuids = Topic.findByUuid(topicUuid).service_uuids;
    let facilities = [];
    serviceUuids.map(serviceUuid => {
      facilities = [...facilities, ...Facility.findByServiceUuid(serviceUuid)];
    })

    let uniq = {};
    return facilities.filter(obj => !uniq[obj.uuid] && (uniq[obj.uuid] = true));
  }

  function getNextQuestion(currentQuestionUuid, topicUuid) {
    const questions = Question.findByTopicUuid(topicUuid);
    const currentIndex = questions.findIndex(question => question.uuid == currentQuestionUuid);
    if (questions.length <= currentIndex + 1)
      return [];

    return [questions[currentIndex +1]];
  }
})()

export default topicHelper;