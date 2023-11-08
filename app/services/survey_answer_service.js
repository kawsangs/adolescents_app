import { Platform } from 'react-native';
import RNFetchBlob from 'rn-fetch-blob';
import SurveyAnswerApi from '../api/surveyAnswerApi';
import SurveyAnswer from '../models/SurveyAnswer';

const surveyAnswerService = (() => {
  return {
    uploadAnswersAudio
  }

  function uploadAnswersAudio(surveyUuid) {
    const voiceAnswers = SurveyAnswer.findBySurvey(surveyUuid).filter(answer => !!answer.voice)
    const surveyAnswerApi = new SurveyAnswerApi();
    _upload(0, voiceAnswers, surveyAnswerApi);
  }

  function _upload(index, answers, surveyAnswerApi) {
    if (index >= answers.length)
      return

    surveyAnswerApi.update(surveyAnswerApi.listingObjectUrl(answers[index].uuid), _buildParams(answers[index]), (res) => {
      SurveyAnswer.deleteByUuid(answers[index]);
      _upload(index + 1, answers, surveyAnswerApi);
    }, (error) => {
      console.log('== upload survey answer audio error = ', error)
    })
  }

  function _buildParams(answer) {
    const audioPath = Platform.OS == 'ios' ? RNFetchBlob.wrap(decodeURIComponent(answer.voice)) : RNFetchBlob.wrap('file://'+ answer.voice)
    return [
      {
        name: 'voice',
        filename : 'voiceRecord.aac',
        type:'audio/aac',
        data: audioPath
      }
    ]
  }
})()

export default surveyAnswerService;