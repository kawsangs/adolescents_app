import BaseModel from './BaseModel';

const MODEL = "SurveySection"

class SurveySection {
  static findByUuid(uuid) {
    return BaseModel.findByUuid(MODEL, uuid)
  }

  static findByTopicId(topicId) {
    return BaseModel.findByAttr(MODEL, {topic_id: `'${topicId}'`}, '', {type: 'ASC', column: 'display_order'});
  }

  static upsert(data) {
    BaseModel.create(MODEL, data)
  }
}

export default SurveySection;