import BaseModel from './BaseModel';

const MODEL = 'SurveyOption'

class SurveyOption {
  static findByQuestion(questionId) {
    return BaseModel.findByAttr(MODEL, {question_id: questionId});
  }
}

export default SurveyOption;