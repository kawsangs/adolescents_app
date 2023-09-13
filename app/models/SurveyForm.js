import BaseModel from './BaseModel';

const MODEL = 'SurveyForm'

class SurveyForm {
  static findById(id) {
    return BaseModel.findByAttr(MODEL, {id: id})[0]
  }

  static create(data) {
    BaseModel.create(MODEL, data);
  }
}

export default SurveyForm;