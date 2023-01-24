import schemaHelper from '../../helpers/schema_helper';
import Category from '../migrations/v2/category';
import Facility from '../migrations/v4/facility';
import {schemaNames} from '../../constants/schema_constant';

const changedSchemas = [
  { label: schemaNames[1], data: Category },
  { label: schemaNames[3], data: Facility }
];

const schemaV4 = {
  schema: schemaHelper.getSchemas(changedSchemas),
  schemaVersion: 4,
  migration: (oldRealm, newRealm) => {
    if (oldRealm.schemaVersion < 4) {
      const oldObjects = oldRealm.objects('Facility');
      const newObjects = newRealm.objects('Facility');

      for (let i = 0; i < oldObjects.length; i++) {
        newObjects[i].tags = !oldObjects[i].tags ? [] : oldObjects[i].tags;
      }

      const newUsers = newRealm.objects('User');
      newUsers.map(user => {
        user.synced = false;
      })

      // Delete service model
      newRealm.deleteModel('Service');
    }
  },
};

export default schemaV4;