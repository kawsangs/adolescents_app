import urlUtil from '../utils/url_util';
import authenticationService from '../services/authentication_service';
import apiService from '../services/api_service';
import httpRequest from '../http/http_request';

class BaseApi {
  constructor(responsibleModel, subModel = '') {
    this.responsibleModel = responsibleModel;
    this.subModel = subModel;
  }

  listingUrl = () => {
    return urlUtil.getRelativeUrl(this.responsibleModel);
  }

  listingObjectUrl = (id) => {
    if (!id) return null;

    return `${this.listingUrl()}/${id}`;
  }

  listingNestedObjectUrl = (id) => {
    if (!id || !this.subModel) return null;

    return `${this.listingObjectUrl(id)}/${this.subModel}`;
  }

  load = (id, successCallback, failedCallback) => {
    const options = { method: 'GET' };

    const url = urlUtil.getAbsoluteUrl(this.listingNestedObjectUrl(id));
    this.sendRequest(url, options, 'json', successCallback, failedCallback);
  }

  sendRequest = (url, options, contentType = 'json', successCallback, failureCallback) => {
    if (!url) return;

    // Reauthenticate to get the new auth token before sending API request
    authenticationService.reauthenticate(async (token) => {
      const response = await httpRequest.send(url, options, token, contentType);
      apiService.handleApiResponse(response, (res) => {
        !!successCallback && successCallback(res);
      }, (error) => {
        !!failureCallback && failureCallback(error);
      });
    });
  }
}

export default BaseApi;