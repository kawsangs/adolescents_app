import CategoryApi from '../api/categoryApi';
import apiService from './api_service';

const categorySyncService = (() => {
  return {
    syncData
  }

  async function syncData(page, successCallback, failureCallback) {
    const response = await new CategoryApi().load(page);
    apiService.handleApiResponse(response, (res) => {
      console.log('categories ==== ', res.categories)

      // _handleSaveCategory(res.categories)
      !!successCallback && successCallback()
    }, (error) => !!failureCallback && failureCallback())
  }

  // private method
  function _handleSaveCategory(categories) {
    // const data = {
    //   uuid,
    //   id (uuid),
    //   code: string,
    //   content_sources: [{"name": "Child Helpline Cambodia", "url": "https://childhelplinecambodia.org/health/1"}],
    //   description: string,
    //   image_url: string,
    //   level: int,
    //   name: string,
    //   parent_code: string,
    //   parent_id: string
    //   tag_list: string
    // }
  }
})();

export default categorySyncService;