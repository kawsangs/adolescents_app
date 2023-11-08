import DeviceInfo from 'react-native-device-info';
import BaseModel from './BaseModel';

const MODEL = 'SurveyForm'

class SurveyForm {
  static getAll() {
    return BaseModel.getAll(MODEL);
  }

  static findById(id) {
    return BaseModel.findByAttr(MODEL, {id: `'${id}'`})[0]
  }

  static upsert(data) {
    BaseModel.create(MODEL, {...data, app_version: DeviceInfo.getVersion()});
  }

  static deleteByIdWithDependency(id) {
    const form = this.findById(id);
    if (!!form) {
      // Question.byForm(id).map(question => {
      //   Option.deleteAllByQuestionId(question.id);
      //   Criteria.deleteAllByQuestionId(question.id);
      // });
      // Question.deleteAllByFormId(id);
      // realm.write(() => {
      //   realm.delete(form);
      // });
    }
  }
}

export default SurveyForm;