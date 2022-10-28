import Category from '../models/Category';
import Facility from '../models/Facility';
import Service from '../models/Service';
import VideoCategory from '../models/VideoCategory';
import Video from '../models/Video';
import Topic from '../models/Topic';
import Question from '../models/Question';

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
    Topic.seedData();
    Question.seedData();
  }
})();

export default seedDataService;