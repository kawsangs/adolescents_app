import RNFetchBlob from 'rn-fetch-blob';
import BaseApi from './baseApi';
import { environment } from '../config/environment';
import urlUtil from '../utils/url_util';

class SurveyAnswerApi extends BaseApi {
  constructor() {
    super('survey_answers', '');
  }

  update(url, data, successCallback, failureCallback) {
    RNFetchBlob.fetch('PUT', urlUtil.getAbsoluteUrl(url), {
      Authorization: `Apikey ${environment.apiKey}`,
      'Content-Type': 'multipart/form-data',
    }, data)
    .then((res) => {
      !!successCallback && successCallback(res)
    })
    .catch((error) => {
      !!failureCallback && failureCallback(error)
    })
  }
}

export default SurveyAnswerApi;