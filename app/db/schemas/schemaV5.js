import schemaHelper from '../../helpers/schema_helper';
import Category from '../migrations/v2/category';
import Facility from '../migrations/v4/facility';
import {schemaNames} from '../../constants/schema_constant';

const changedSchemas = [
  { label: schemaNames[1], data: Category },
  { label: schemaNames[3], data: Facility }
];

const schemaV5 = {
  schema: schemaHelper.getSchemas(changedSchemas),
  schemaVersion: 5,
  onMigration: (oldRealm, newRealm) => {
    if (oldRealm.schemaVersion < 5) {
      const newObjects = newRealm.objects('User');
      for (const index in newObjects) {
        newObjects[index].synced = false;
      }
    }
  },
};

export default schemaV5;