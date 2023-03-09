import VideoAuthorApi from '../api/videoAuthorApi';
import apiService from './api_service';
import VideoAuthor from '../models/VideoAuthor';
import {itemsPerPage} from '../constants/sync_data_constant';

const videoAuthorSyncService = (() => {
  return {
    syncAllData
  }

  function syncAllData(callback) {
    _syncByPage(1, 1, callback)
  }

  // private method
  async function _syncByPage(page, totalPage, callback) {
    if (page > totalPage) {
      !!callback && callback()
      return
    }

    const response = await new VideoAuthorApi().load(page)
    apiService.handleApiResponse(response, (res) => {
      const allPage = Math.ceil(res.pagy.count / itemsPerPage)
      _handleSaveAuthor(res.video_authors, () => {
        _syncByPage(page+1, allPage, callback)
      })
    }, (error) => !!callback && callback())
  }

  function _handleSaveAuthor(authors, callback) {
    authors.map(author => {
      if (!!VideoAuthor.findByUuid(author.id)) {
        const {id, ...authorParams} = author;
        VideoAuthor.update(id, authorParams)
      }
      else
        VideoAuthor.create(author)
    })
    !!callback && callback()
  }
})()

export default videoAuthorSyncService