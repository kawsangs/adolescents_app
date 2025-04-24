import Category from '../models/Category';
import Facility from '../models/Facility';
import Video from '../models/Video';
import VideoAuthor from '../models/VideoAuthor';
import Tag from '../models/Tag';
import Topic from '../models/Topic';
import topicService from './topic_service';
import topics from '../db/json/topics.json';
import Contact from '../models/Contact';
import VideoTag from '../models/VideoTag';
import Reason from '../models/Reason';
import Theme from '../models/Theme';
import realm from '../db/schema';

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
    Contact.getAll().length == 0 && Contact.seedData();
    VideoTag.getAll().length == 0 && VideoTag.seedData();
    Reason.getAll().length == 0 && Reason.seedData();
    (Theme.getAll().length == 0 && realm.schemaVersion >= 14 ) && Theme.seedOriginalTheme();
  }
})();

export default seedDataService;