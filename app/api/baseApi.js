import EncryptedStorage from 'react-native-encrypted-storage';
import urlUtil from '../utils/url_util';
import authenticationService from '../services/authentication_service';
import apiService from '../services/api_service';
import httpRequest from '../http/http_request';
import { environment } from '../config/environment';
import { AUTH_TOKEN } from '../constants/authentication_constant';

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

  load = async (id, successCallback, failedCallback) => {
    const options = { method: 'GET' };
    const url = urlUtil.getAbsoluteUrl(this.listingObjectUrl(id));

    if (await EncryptedStorage.getItem(AUTH_TOKEN)) {
      BaseApi.sendAuthenticatedRequest(url, options, 'json', successCallback, failedCallback);
      return;
    }

    BaseApi.sendUnauthenticatedRequest(url, options, 'json', successCallback, failedCallback);
  }

  static sendAuthenticatedRequest = (url, options, contentType = 'json', successCallback, failureCallback) => {
    if (!url) return;

    // Reauthenticate to get the new auth token before sending API request
    authenticationService.reauthenticate((token) => {
      this.handleRequest(url, options, token, contentType, successCallback, failureCallback);
    });
  }

  static sendUnauthenticatedRequest = (url, options, contentType = 'json', successCallback, failureCallback) => {
    if (!url) return;
    
    this.handleRequest(url, options, environment.accessToken, contentType, successCallback, failureCallback);
  }

  static handleRequest = async (url, options, token, contentType = 'json', successCallback, failureCallback) => {
    const response = await httpRequest.send(url, options, token, contentType);
    apiService.handleApiResponse(response, (res) => {
      !!successCallback && successCallback(res);
    }, (error) => {
      !!failureCallback && failureCallback(error);
    });
  }
}

export default BaseApi;