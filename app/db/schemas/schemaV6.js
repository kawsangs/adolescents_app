import schemaHelper from '../../helpers/schema_helper';
import Category from '../migrations/v2/category';
import Facility from '../migrations/v5/facility';
import {schemaNames} from '../../constants/schema_constant';

const changedSchemas = [
  { label: schemaNames[1], data: Category },
  { label: schemaNames[3], data: Facility }
];

const schemaV6 = {
  schema: schemaHelper.getSchemas(changedSchemas),
  schemaVersion: 6,
  onMigration: (oldRealm, newRealm) => {
    if (oldRealm.schemaVersion < 6) {
      const oldObjects = oldRealm.objects('Facility');
      const newObjects = newRealm.objects('Facility');

      for (const index in oldObjects) {
        newObjects[index].logo = !oldObjects[index].logo ? '' : oldObjects[index].logo;
      }
    }
  },
}

export default schemaV6;