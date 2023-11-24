import apiService from './api_service';
import {itemsPerPage} from '../constants/sync_data_constant';
import VideoTag from '../models/VideoTag';
import Tag from '../models/Tag';
import VideoTagApi from '../api/videoTagApi';
import TagApi from '../api/tagApi';

export default class TagSyncService {
  constructor(type) {
    if (type == 'videoTag') {
      this.apiController = new VideoTagApi();
      this.model = VideoTag;
      this.fieldName = 'video_tags';
    }
    else {
      this.apiController = new TagApi();
      this.model = Tag;
      this.fieldName = 'tags';
    }
  }

  syncAllData = (successCallback, failureCallback) => {
    this._syncByPage(1, 1, successCallback, failureCallback);
  }

  _syncByPage = async (page, totalPage, successCallback, failureCallback) => {
    if (page > totalPage) {
      !!successCallback && successCallback(this.model.getAll())
      return
    }

    const response = await this.apiController.load(page)
    apiService.handleApiResponse(response, (res) => {
      if (page == 1)
        this.model.deleteAll()

      const allPage = Math.ceil(res.pagy.count / itemsPerPage)
      this._handleSaveTag(res[this.fieldName], () => {
        this._syncByPage(page+1, allPage, successCallback)
      })
    }, (error) => !!failureCallback && failureCallback())
  }

  _handleSaveTag = (tags, callback) => {
    tags.map(tag => {
      if (!!this.model.findByUuid(tag.id)) {
        const {id, ...tagParams} = tag;
        this.model.update(id, tagParams)
      }
      else
        this.model.create(tag)
    })
    !!callback && callback()
  }
}