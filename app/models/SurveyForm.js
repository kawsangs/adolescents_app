import DeviceInfo from 'react-native-device-info';
import BaseModel from './BaseModel';

const MODEL = 'SurveyForm'

class SurveyForm {
  static findById(id) {
    return BaseModel.findByAttr(MODEL, {id: id})[0]
  }

  static upsert(data) {
    BaseModel.create(MODEL, {...data, app_version: DeviceInfo.getVersion()});
  }
}

export default SurveyForm;