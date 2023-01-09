import schemaHelper from '../../helpers/schema_helper';
import Category from '../migrations/v2/category';
import Facility from '../migrations/v3/facility';
import {schemaNames} from '../../constants/schema_constant';

const changedSchemas = [
  { label: schemaNames[1], data: Category },
  { label: schemaNames[3], data: Facility }
];

const schemaV2 = {
  schema: schemaHelper.getSchemas(changedSchemas),
  schemaVersion: 3,
  migration: (oldRealm, newRealm) => {
    if (oldRealm.schemaVersion < 3) {
      const oldObjects = oldRealm.objects('Facility');
      const newObjects = newRealm.objects('Facility');

      for (let i = 0; i < oldObjects.length; i++) {
        newObjects[i].province_id = !oldObjects[i].province_id ? '' : oldObjects[i].province_id;
      }
    }
  },
};

export default schemaV2;