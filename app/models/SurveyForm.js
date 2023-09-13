import BaseModel from './BaseModel';

const MODEL = 'SurveyForm'

class SurveyForm {
  static findById(id) {
    return BaseModel.findByAttr(MODEL, {id: id})[0]
  }
}

export default SurveyForm;