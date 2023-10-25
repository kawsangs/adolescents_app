import BaseModel from './BaseModel';
import SurveyOption from './SurveyOption';
import SurveyCriteria from './SurveyCriteria';
import realm from '../db/schema';

const MODEL = 'SurveyQuestion';

class SurveyQuestion {
  static findBySectionId(id) {
    return BaseModel.findByAttr(MODEL, {section_id: `'${id}'`});
  }

  static findAllBySurveyForm(surveyFormId) {
    return BaseModel.findByAttr(MODEL, { survey_id: `${surveyFormId}` });
  }

  static upsert(data) {
    BaseModel.create(MODEL, data);
    SurveyOption.upsertCollection(data.options)
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
}

export default SurveyQuestion;