import TagApi from '../api/tagApi';
import apiService from './api_service';
import Tag from '../models/Tag';
import {itemsPerPage} from '../constants/sync_data_constant';

const tagSyncService = (() => {
  return {
    syncAllData
  }

  function syncAllData(successCallback, failureCallback) {
    _syncByPage(1, 1, successCallback, failureCallback)
  }

  // private method
  async function _syncByPage(page, totalPage, successCallback, failureCallback) {
    if (page > totalPage) {
      !!successCallback && successCallback(Tag.getAll())
      return
    }

    const response = await new TagApi().load(page)
    apiService.handleApiResponse(response, (res) => {
      if (page == 1)
        Tag.deleteAll()

      const allPage = Math.ceil(res.pagy.count / itemsPerPage)
      _handleSaveTag(res.tags, () => {
        _syncByPage(page+1, allPage, successCallback)
      })
    }, (error) => !!failureCallback && failureCallback())
  }

  function _handleSaveTag(tags, callback) {
    tags.map(tag => {
      if (!!Tag.findByUuid(tag.id)) {
        const {id, ...tagParams} = tag;
        Tag.update(id, tagParams)
      }
      else
        Tag.create(tag)
    })
    !!callback && callback()
  }
})()

export default tagSyncService