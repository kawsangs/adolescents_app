import Category from '../models/Category';
import Facility from '../models/Facility';
import Video from '../models/Video';
import Tag from '../models/Tag';
import topicSeedDataService from './topic_seed_data_service';

const seedDataService = (() => {
  return {
    seedToRealm,
  }

  function seedToRealm() {
    Tag.seedData();
    Category.seedData();
    Facility.seedData();
    Video.seedData();
    topicSeedDataService.seedToRealm();
  }
})();

export default seedDataService;