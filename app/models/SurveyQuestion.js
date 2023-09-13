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

  static create(data) {
    BaseModel.create(MODEL, data);
  }

  static update(id, data) {
    realm.write(() => {
      realm.create(MODEL, Object.assign(data, { id: id }), 'modified');
    });
  }
}

export default SurveyQuestion;