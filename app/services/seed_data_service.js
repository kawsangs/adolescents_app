import Category from '../models/Category';
import Facility from '../models/Facility';
import Video from '../models/Video';
import VideoAuthor from '../models/VideoAuthor';
import Tag from '../models/Tag';
import Topic from '../models/Topic';
import topicService from './topic_service';
import topics from '../db/json/topics.json';

const seedDataService = (() => {
  return {
    seedToRealm,
  }

  function seedToRealm() {
    Tag.getAll().length == 0 && Tag.seedData();
    Category.getAll().length == 0 && Category.seedData();
    Facility.getAll().length == 0 && Facility.seedData();
    Video.getAll().length == 0 && Video.seedData();
    VideoAuthor.getAll().length == 0 && VideoAuthor.seedData();
    Topic.getAll().length == 0 && topicService.saveTopicCollection(topics, true);
  }
})();

export default seedDataService;