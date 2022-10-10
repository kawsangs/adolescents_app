import Category from '../models/Category';
import Facility from '../models/Facility';
import Service from '../models/Service';
import VideoCategory from '../models/VideoCategory';
import Video from '../models/Video';

import videoCategories from '../db/json/video_categories.json';
import videos from '../db/json/videos.json';

const seedDataService = (() => {
  return {
    seedToRealm,
  }

  function seedToRealm() {
    Category.seedData();
    Facility.seedData();
    Service.seedData();
    new VideoCategory().seedData(videoCategories);
    new Video().seedData(_getFormattedVideos());
  }

  // private method
  function _getFormattedVideos() {
    let formattedVideos = [];
    videos.map(video => {
      formattedVideos.push({...video, video_category_uuid: !!video.video_category ? video.video_category.id : null})
    });
    return formattedVideos;
  }
})();

export default seedDataService;