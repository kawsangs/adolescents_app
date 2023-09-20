import BaseModel from './BaseModel';
import realm from '../db/schema';

const MODEL = 'SurveyQuestion';

class SurveyQuestion {
  static findByForm(formId) {
    return BaseModel.findByAttr(MODEL, {form_id: formId}, '', {type: 'ASC', column: 'display_order'});
  }

  static findBySectionId(id) {
    return BaseModel.findByAttr(MODEL, {section_id: `'${id}'`});
  }

  static upsert(data) {
    BaseModel.create(MODEL, data);
  }

  static upsertCollection(items) {
    items.map(item => {
      this.upsert(item)
    });
  }
}

export default SurveyQuestion;