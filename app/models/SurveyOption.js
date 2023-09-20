import BaseModel from './BaseModel';

const MODEL = 'SurveyOption'

class SurveyOption {
  static getAll() {
    return BaseModel.getAll(MODEL);
  }

  static findByQuestion(questionId) {
    return BaseModel.findByAttr(MODEL, {question_id: questionId});
  }

  static upsert(data) {
    BaseModel.create(MODEL, data);
  }
}

export default SurveyOption;