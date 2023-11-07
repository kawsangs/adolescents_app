import ContactApi from '../api/contactApi';
import apiService from './api_service';
import Contact from '../models/Contact';

const itemsPerPage = 20;

const contactService = (() => {
  return {
    syncAll,
  }

  function syncAll(successCallback, failureCallback) {
    _syncAndRemoveByPage(1, 1, successCallback, failureCallback);
  }

  // privat method
  async function _syncAndRemoveByPage(page, totalPage, successCallback, failureCallback, prevContacts = []) {
    if(page > totalPage) {
      Contact.deleteAll();
      Contact.createCollection(prevContacts);
      !!successCallback && successCallback();
      return;
    }

    const response = await new ContactApi().load(page);
    apiService.handleApiResponse(response, (res) => {
      const allPage = Math.ceil(res.pagy.count / itemsPerPage)
      _syncAndRemoveByPage(page+1, allPage, successCallback, failureCallback, [...prevContacts, ...res.contacts]);
    }, (error) => !!failureCallback && failureCallback())
  }
})();

export default contactService;