import schemaHelper from '../../helpers/schema_helper';
import Category from '../migrations/v7/category';
import Facility from '../migrations/v5/facility';
import Video from '../migrations/v7/video';
import Topic from '../migrations/v6/topic';
import Tag from '../migrations/v5/tag';
import User from '../migrations/v7/user';
import {schemaNames} from '../../constants/schema_constant';
import uuidv4 from '../../utils/uuidv4_util';
import videos from '../../db/json/videos.json';

const changedSchemas = [
  { label: schemaNames[0], data: User },
  { label: schemaNames[1], data: Category },
  { label: schemaNames[3], data: Facility },
  { label: schemaNames[4], data: Video },
  { label: schemaNames[5], data: Topic },
  { label: schemaNames[10], data: Tag }
];

const schemaV8 = {
  schema: schemaHelper.getSchemas(changedSchemas),
  schemaVersion: 8,
  onMigration: (oldRealm, newRealm) => {
    if (oldRealm.schemaVersion < 8) {
      const oldObjects = oldRealm.objects('User');
      const newObjects = newRealm.objects('User');
      for (let i = 0; i < oldObjects.length; i++) {
        // if the user is anonymous the occupation and education_level are set to n_a
        newObjects[i].occupation = oldObjects[i].age == -1 ? 'n_a' : !oldObjects[i].occupation ? 'n_a' : oldObjects[i].occupation;
        newObjects[i].education_level = oldObjects[i].age == -1 ? 'n_a' : !oldObjects[i].education_level ? 'n_a' : oldObjects[i].education_level;
        newObjects[i].synced = false;
      }

      oldRealm.objects('FacilityImage').map(facilityImage => {
        newRealm.create('DownloadedFile', { uuid: uuidv4(), name: facilityImage.name, type: 'image' });
      });
      newRealm.deleteModel('FacilityImage');  //Delete FaciltyImage model

      // Add the tag_list to the existing videos with the matched id
      const newVideos = newRealm.objects('Video');
      videos.map(video => {
        const index = newVideos.map(newVideo => newVideo.id).indexOf(video.id);
        if (index != -1)
          newVideos[index].tag_list = video.tag_list
      });

      newRealm.delete(newRealm.objects('Category'));
    }
  },
}

export default schemaV8;