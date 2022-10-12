import Category from '../models/Category';
import Facility from '../models/Facility';
import Service from '../models/Service';
import VideoCategory from '../models/VideoCategory';
import Video from '../models/Video';

const seedDataService = (() => {
  return {
    seedToRealm,
  }

  function seedToRealm() {
    Service.seedData();
    Category.seedData();
    Facility.seedData();
    Service.seedData();
    VideoCategory.seedData();
    Video.seedData();
  }
})();

export default seedDataService;