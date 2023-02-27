import TagApi from '../api/tagApi';
import apiService from './api_service';
import Tag from '../models/Tag';

const tagSyncService = (() => {
  return {
    syncData
  }

  async function syncData(successCallback) {
    const response = await new TagApi().load()
    apiService.handleApiResponse(response, (res) => {
      console.log('== sync tag success = ', res)
      _handleSaveTag(res, successCallback)
    }, (error) => console.log('== sync tag error = ', error))
  }

  // private method
  function _handleSaveTag(tags, callback) {
    tags.map(tag => {
      if (!!Tag.findByUuid(tag.id)) {
        const {id, ...tagParams} = tag;
        Tag.update(id, tagParams)
      }
      else
        Tag.create(tag)
    })
    !!callback && callback(Tag.getAll())
  }
})()

export default tagSyncService