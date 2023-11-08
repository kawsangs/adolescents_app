import BaseModel from './BaseModel';
import SurveyCriteria from './SurveyCriteria';
import realm from '../db/schema';
import surveyOptionService from '../services/survey_option_service';

const MODEL = 'SurveyQuestion';

class SurveyQuestion {
  static findBySectionId(id) {
    return BaseModel.findByAttr(MODEL, {section_id: `'${id}'`});
  }

  static findAllByTopicId(topicId) {
    return BaseModel.findByAttr(MODEL, { topic_id: `${topicId}` });
  }

  static upsert(data) {
    BaseModel.create(MODEL, data);
    surveyOptionService.save(data.options);
    SurveyCriteria.upsertCollection(data.criterias)
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

  static deleteByTopicId(topicId) {
    questions = BaseModel.findByAttr(MODEL, { topic_id: `'${topicId}'` });

  }
}

export default SurveyQuestion;