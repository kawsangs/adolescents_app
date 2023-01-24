import schemaHelper from '../../helpers/schema_helper';
import Category from '../migrations/v2/category';
import Facility from '../migrations/v4/facility';
import User from '../migrations/v5/user';
import {schemaNames} from '../../constants/schema_constant';

const changedSchemas = [
  { label: schemaNames[0], data: User },
  { label: schemaNames[1], data: Category },
  { label: schemaNames[3], data: Facility }
];

const schemaV5 = {
  schema: schemaHelper.getSchemas(changedSchemas),
  schemaVersion: 5,
  migration: (oldRealm, newRealm) => {
    if (oldRealm.schemaVersion < 5) {
      const oldObjects = oldRealm.objects('User');
      const newObjects = newRealm.objects('User');

      for (let i = 0; i < oldObjects.length; i++) {
        newObjects[i].device_id_synced = !oldObjects[i].device_id_synced ? false : oldObjects[i].device_id_synced;
      }
    }
  },
};

export default schemaV5;