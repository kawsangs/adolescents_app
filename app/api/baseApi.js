import urlUtil from '../utils/url_util';
import apiService from '../services/api_service';
import httpRequest from '../http/http_request';
import { environment } from '../config/environment';

import UserBasedAuth from './userBasedAuth';
import KeyBasedAuth from './keyBasedAuth';

class BaseApi {
  constructor(responsibleModel, subModel = '') {
    this.authenticationType = environment.isUserBasedAuth ? new UserBasedAuth() : new KeyBasedAuth();
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

  put = (url, params, successCallback, failureCallback) => {
    const options = {
      method: 'PUT',
      params: params,
    };
    this.sendRequest(url, options, successCallback, failureCallback);
  }

  post = (url, params, successCallback, failureCallback) => {
    const options = {
      method: 'POST',
      params: params,
    };
    this.sendRequest(url, options, successCallback, failureCallback);
  }

  sendRequest = (url, options, successCallback, failureCallback) => {
    this.authenticationType.sendRequest(async (token) => {
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