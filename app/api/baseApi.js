import urlUtil from '../utils/url_util';
import apiService from '../services/api_service';
import httpRequest from '../http/http_request';

class BaseApi {
  constructor(strategy, responsibleModel, subModel = '') {
    this.strategry = strategy;
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

  load = (id, successCallback, failureCallback) => {
    const url = urlUtil.getAbsoluteUrl(this.listingObjectUrl(id));
    const options = { method: 'GET'}
    this.sendRequest(url, options, successCallback, failureCallback);
  }

  put = (id, data, successCallback, failureCallback) => {
    const url = urlUtil.getAbsoluteUrl(this.listingObjectUrl(id));
    const options = {
      method: 'PUT',
      data: data,
    };
    this.sendRequest(url, options, successCallback, failureCallback);
  }

  post = (id, data, successCallback, failureCallback) => {
    const url = urlUtil.getAbsoluteUrl(this.listingNestedObjectUrl(id));
    const options = {
      method: 'POST',
      data: data,
    };
    this.sendRequest(url, options, successCallback, failureCallback);
  }

  sendRequest = (url, options, successCallback, failureCallback) => {
    this.strategry.sendRequest(async (token) => {
      const response = await httpRequest.send(url, options, token, 'json');
      apiService.handleApiResponse(response, (res) => {
        !!successCallback && successCallback(res);
      }, (error) => {
        !!failureCallback && failureCallback(error);
      });
    });
  }
}

export default BaseApi;