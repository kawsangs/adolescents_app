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
    }, (error) => {
      console.log('sync video error = ', error)
      !!failureCallback && failureCallback()
    })
  }

  // private method
  function _handleSaveVideo(videos) {
    console.log('handle save videos = ', videos.length)
    videos.map(video => {
      console.log('== each video = ', video)
      console.log('===================================')

      !!Video.findByUuid(video.id) ? Video.update(video.id, video) : Video.create(video)
    })
  }
})()

export default videoSyncService;