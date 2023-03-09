import VideoApi from '../api/videoApi';
import apiService from './api_service';
import Video from '../models/Video';

const videoSyncService = (() => {
  return {
    syncData
  }

  async function syncData(page, successCallback, failureCallback) {
    const response = await new VideoApi().load(page)
    apiService.handleApiResponse(response, (res) => {
      _handleSaveVideo(res.videos)
      !!successCallback && successCallback()
    }, (error) => !!failureCallback && failureCallback())
  }

  // private method
  function _handleSaveVideo(videos) {
    videos.map(video => {
      !!Video.findByUuid(video.id) ? Video.update(video.id, video) : Video.create(video)
    })
  }
})()

export default videoSyncService;