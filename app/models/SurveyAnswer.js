import BaseModel from './BaseModel';

const MODEL = 'SurveyAnswer'

class SurveyAnswer {
  static findByUuid(uuid) {
    return BaseModel.findByUuid(MODEL, uuid);
  }

  static findByQuiz(quizUuid) {
    return BaseModel.findByAttr(MODEL,  { quiz_uuid: `'${quizUuid}'` });
  }

  static update(uuid, data) {
    BaseModel.update(MODEL, uuid, data);
  }
}

export default SurveyAnswer;