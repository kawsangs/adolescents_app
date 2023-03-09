import schemaHelper from '../../helpers/schema_helper';
import Category from '../migrations/v2/category';
import Facility from '../migrations/v5/facility';
import Video from '../migrations/v5/video';
import Topic from '../migrations/v6/topic';
import Tag from '../migrations/v5/tag';
import {schemaNames} from '../../constants/schema_constant';

const changedSchemas = [
  { label: schemaNames[1], data: Category },
  { label: schemaNames[3], data: Facility },
  { label: schemaNames[4], data: Video },
  { label: schemaNames[5], data: Topic },
  { label: schemaNames[10], data: Tag }
];

const schemaV7 = {
  schema: schemaHelper.getSchemas(changedSchemas),
  schemaVersion: 7,
  onMigration: (oldRealm, newRealm) => {
  },
}

export default schemaV7;