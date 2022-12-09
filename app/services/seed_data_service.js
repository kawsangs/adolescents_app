import Category from '../models/Category';
import Facility from '../models/Facility';
import Service from '../models/Service';
import Video from '../models/Video';
import topicSeedDataService from './topic_seed_data_service';

import Notification from '../models/Notification';

const seedDataService = (() => {
  return {
    seedToRealm,
  }

  function seedToRealm() {
    Service.seedData();
    Category.seedData();
    Facility.seedData();
    Video.seedData();
    topicSeedDataService.seedToRealm();

    Notification.seedData();
  }
})();

export default seedDataService;