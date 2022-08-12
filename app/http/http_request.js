import axios from 'axios';
import qs from 'qs';

import errorUtil from '../utils/error_util';

const httpRequest = (() => {
  return {
    send,
  }

  function send(url, options, token = null, contentType = 'json') {
    if (!url) return;

    return axios({
      method: options.method,
      url: url,
      data: options.data || undefined,
      params: options.params || undefined,
      responseType: contentType,
      paramsSerializer: function(params) {
        return qs.stringify(params, {arrayFormat: 'brackets'})
      },
      headers: generateAuthorizationHeader(token),
    })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return { error: errorUtil.getApiErrorObject(error) };
    })
  }

  // private method
  function generateAuthorizationHeader(token) {
    return {
      Accept: 'application/json',
      Authorization: `Token ${token ?? ''}`,
    };
  }
})();

export default httpRequest;