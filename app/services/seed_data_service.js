import Category from '../models/Category';
import Facility from '../models/Facility';
import Video from '../models/Video';
import VideoAuthor from '../models/VideoAuthor';
import Tag from '../models/Tag';
import topicSeedDataService from './topic_seed_data_service';

const seedDataService = (() => {
  return {
    seedToRealm,
  }

  function seedToRealm() {
    Tag.getAll().length == 0 && Tag.seedData();
    Category.seedData();
    Facility.getAll().length == 0 && Facility.seedData();
    Video.getAll().length == 0 && Video.seedData();
    VideoAuthor.getAll().length == 0 && VideoAuthor.seedData();
    topicSeedDataService.seedToRealm();
  }
})();

export default seedDataService;