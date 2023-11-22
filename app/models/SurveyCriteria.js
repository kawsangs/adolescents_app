import BaseModel from './BaseModel';

const MODEL = 'SurveyCriteria';

class SurveyCriteria {
  static findAllByQuestion(questionId) {
    return BaseModel.findByAttr(MODEL, {question_id: `'${questionId}'`});
  }

  static upsert(data) {
    BaseModel.create(MODEL, data)
  }

  static upsertCollection(items) {
    items.map(item => {
      this.upsert(item)
    });
  }

  static deleteAllByQuestionId(questionId) {
    BaseModel.deleteByCollection(this.findAllByQuestion(questionId));
  }
}

export default SurveyCriteria