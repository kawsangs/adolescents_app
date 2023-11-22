import BaseModel from './BaseModel';

const MODEL = "SurveySection"

class SurveySection {
  static findByUuid(uuid) {
    return BaseModel.findByUuid(MODEL, uuid)
  }

  static findAllByTopicId(topicId) {
    return BaseModel.findByAttr(MODEL, {topic_id: `'${topicId}'`}, '', {type: 'ASC', column: 'display_order'});
  }

  static upsert(data) {
    BaseModel.create(MODEL, data)
  }

  static deleteAllByTopicId(topicId) {
    BaseModel.deleteByCollection(this.findAllByTopicId(topicId));
  }
}

export default SurveySection;