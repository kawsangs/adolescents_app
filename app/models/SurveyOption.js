import BaseModel from './BaseModel';

const MODEL = 'SurveyOption'

class SurveyOption {
  static getAll() {
    return BaseModel.getAll(MODEL);
  }

  static findAllByQuestion(questionId) {
    return BaseModel.findByAttr(MODEL, {question_id: `'${questionId}'`});
  }

  static upsert(data) {
    BaseModel.create(MODEL, data);
  }

  static upsertCollection(items) {
    items.map(item => {
      this.upsert(item);
    });
  }

  static deleteAllByQuestionId(questionId) {
    BaseModel.deleteByCollection(this.findAllByQuestion(questionId));
  }
}

export default SurveyOption;