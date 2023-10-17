import BaseModel from './BaseModel';
import SurveyOption from './SurveyOption';
import SurveyCriteria from './SurveyCriteria';
import realm from '../db/schema';

const MODEL = 'SurveyQuestion';

class SurveyQuestion {
  // static findByTopicId(topicId) {
  //   return BaseModel.findByAttr(MODEL, {topic_id: topicId}, '', {type: 'ASC', column: 'display_order'});
  // }

  static findBySectionId(id) {
    return BaseModel.findByAttr(MODEL, {section_id: `'${id}'`});
  }

  static upsert(data) {
    BaseModel.create(MODEL, data);
    SurveyOption.upsertCollection(data.options)
    console.log('============================')
    console.log('== criteria = ', data.criterias)
    // SurveyCriteria.upsertCollection(data.criterias)
  }

  static upsertCollection(items) {
    items.map(item => {
      this.upsert(item)
    });
  }

  static update(id, data) {
    realm.write(() => {
      realm.create(MODEL, Object.assign(data, { id: id }), 'modified');
    });
  }
}

export default SurveyQuestion;