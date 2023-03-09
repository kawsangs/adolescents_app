import schemaHelper from '../../helpers/schema_helper';
import Category from '../migrations/v2/category';
import Facility from '../migrations/v5/facility';
import Video from '../migrations/v5/video';
import Tag from '../migrations/v5/tag';
import {schemaNames} from '../../constants/schema_constant';

const changedSchemas = [
  { label: schemaNames[1], data: Category },
  { label: schemaNames[3], data: Facility },
  { label: schemaNames[4], data: Video },
  { label: schemaNames[10], data: Tag }
];

const schemaV6 = {
  schema: schemaHelper.getSchemas(changedSchemas),
  schemaVersion: 6,
  onMigration: (oldRealm, newRealm) => {
    if (oldRealm.schemaVersion < 6) {
      const facilities = newRealm.objects('Facility')
      const tags = newRealm.objects('Tag')
      const videos = newRealm.objects('Video')
      newRealm.delete(facilities)
      newRealm.delete(tags)
      newRealm.delete(videos)
    }
  },
}

export default schemaV6;