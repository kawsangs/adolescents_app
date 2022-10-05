import Category from '../models/Category';
import Facility from '../models/Facility';
import Service from '../models/Service';
import VideoCategory from '../models/VideoCategory';
import Video from '../models/Video';

import categories from '../db/json/categories.json';
import facilities from '../db/json/facilities.json';

const seedDataService = (() => {
  return {
    seedToRealm,
  }

  function seedToRealm() {
    Service.seedData();
    VideoCategory.seedData();
    Video.seedData();
  }
})();

export default seedDataService;