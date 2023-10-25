import realm from '../db/schema';
import BaseModel from './BaseModel';

const MODEL = 'SurveyAnswer'

class SurveyAnswer {
  static findByUuid(uuid) {
    return BaseModel.findByUuid(MODEL, uuid);
  }

  static findBySurvey(surveyUuid) {
    return [...BaseModel.findByAttr(MODEL,  { survey_id: `'${surveyUuid}'` })];
  }

  static upsert(data) {
    BaseModel.create(MODEL, data);
  }

  static update(uuid, data) {
    BaseModel.update(MODEL, uuid, data);
  }

  static deleteSurveyAnswersBySurvey(surveyUuid) {
    const answers = BaseModel.findByAttr(MODEL, {survey_id: `'${surveyUuid}'`});
    if (answers.length > 0)
      realm.write(() => realm.delete(answers));
  }
}

export default SurveyAnswer;