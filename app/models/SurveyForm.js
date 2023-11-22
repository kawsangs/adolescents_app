import DeviceInfo from 'react-native-device-info';
import BaseModel from './BaseModel';
import SurveyQuestion from './SurveyQuestion';
import SurveyOption from './SurveyOption';
import SurveyCriteria from './SurveyCriteria';
import SurveySection from './SurveySection';

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

  static deleteByIdWithDependency(topicId) {
    const form = this.findById(topicId);
    if (!!form) {
      SurveyQuestion.findAllByTopicId(topicId).map(question => {
        SurveyOption.deleteAllByQuestionId(question.id);
        SurveyCriteria.deleteAllByQuestionId(question.id);
      });
      SurveyQuestion.deleteAllByTopicId(topicId);
      SurveySection.deleteAllByTopicId(topicId);
      BaseModel.deleteItem(form);
    }
  }
}

export default SurveyForm;