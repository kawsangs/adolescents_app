import schemaHelper from '../../helpers/schema_helper';
import Category from '../migrations/v7/category';
import Facility from '../migrations/v5/facility';
import Video from '../migrations/v5/video';
import Topic from '../migrations/v6/topic';
import Tag from '../migrations/v5/tag';
import User from '../migrations/v7/user';
import {schemaNames} from '../../constants/schema_constant';

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
      const categories = newRealm.objects('Category');
      newRealm.delete(categories);
    }
  },
}

export default schemaV8;