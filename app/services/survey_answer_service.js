import SurveyAnswerApi from '../api/surveyAnswerApi';
import SurveyAnswer from '../models/SurveyAnswer';

const surveyAnswerService = (() => {
  return {
    upload
  }
  function upload(uuid) {
    const surveyAnswerApi = new SurveyAnswerApi();
    surveyAnswerApi.post(surveyAnswerApi.listingObjectUrl(uuid), SurveyAnswer.findByUuid(uuid), (res) => {
      console.log('== upload survey answer success = ', res)
    }, (error) => {
      console.log('== upload survey answer error = ', error)
    })
  }
})();

export default surveyAnswerService;