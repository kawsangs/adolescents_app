import BaseModel from './BaseModel';

const MODEL = 'SurveyAnswer'

class SurveyAnswer {
  static findByUuid(uuid) {
    return BaseModel.findByUuid(MODEL, uuid);
  }

  static findBySurvey(surveyUuid) {
    return [...BaseModel.findByAttr(MODEL,  { survey_uuid: `'${surveyUuid}'` })];
  }

  static upsert(data) {
    BaseModel.create(MODEL, data);
  }

  static update(uuid, data) {
    BaseModel.update(MODEL, uuid, data);
  }
}

export default SurveyAnswer;