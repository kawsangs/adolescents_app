import BaseModel from './BaseModel';

const MODEL = "SurveySection"

class SurveySection {
  static findByUuid(uuid) {
    return BaseModel.findByUuid(MODEL, uuid)
  }

  static findByFormId(formId) {
    return BaseModel.findByAttr(MODEL, {form_id: formId}, '', {type: 'ASC', column: 'display_order'});
  }

  static upsert(data) {
    BaseModel.create(MODEL, data)
  }
}

export default SurveySection;