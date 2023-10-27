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

  static deleteAnswersWihoutVoice(surveyUuid) {
    const answers = this.findBySurvey(surveyUuid).filter(answer => !answer.voice);
    if (answers.length > 0)
      realm.write(() => realm.delete(answers));
  }

  static deleteByUuid(uuid) {
    BaseModel.deleteByUuid(MODEL, uuid);
  }
}

export default SurveyAnswer;