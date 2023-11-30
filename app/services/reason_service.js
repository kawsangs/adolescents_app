import ReasonApi from '../api/reasonApi';
import apiService from './api_service';
import Reason from '../models/Reason';

const itemsPerPage = 20;

const reasonService = (() => {
  return {
    syncData
  }

  async function syncData(successCallback, failureCallback) {
    _syncByPage(1, 1, successCallback, failureCallback);
  }

  // private method
  async function _syncByPage(page, totalPage, successCallback, failureCallback) {
    if(page > totalPage) {
      !!successCallback && successCallback();
      return;
    }

    const response = await new ReasonApi().load(page)
    apiService.handleApiResponse(response, (res) => {
      const allPage = Math.ceil(res.pagy.count / itemsPerPage)
      _handleManipulateReason(res.reasons);
      _syncByPage(page+1, allPage, successCallback, failureCallback,);
    }, (error) => !!failureCallback && failureCallback())
  }

  function _handleManipulateReason(reasons) {
    reasons.map(reason => {
      const savedReason = Reason.findById(reason.id);
      if (!reason.deleted_at)
        !!savedReason ? Reason.update(reason.id, reason) : Reason.create(reason)
      else if (!!savedReason)
        Reason.deleteById(reason.id)
    })
  }
})();

export default reasonService;