import schemaHelper from '../../helpers/schema_helper';
import Category from '../migrations/v2/category';
import {schemaNames} from '../../constants/schema_constant';

const changedSchemas = [
  { label: schemaNames[1], data: Category },
];

const schemaV2 = {
  schema: schemaHelper.getSchemas(changedSchemas),
  schemaVersion: 2,
  migration: (oldRealm, newRealm) => {
    if (oldRealm.schemaVersion < 2) {
      const oldObjects = oldRealm.objects('Category');
      const newObjects = newRealm.objects('Category');

      for (let i = 0; i < oldObjects.length; i++) {
        newObjects[i].sources = !oldObjects[i].sources ? [] : oldObjects[i].sources;
      }
    }
  },
};

export default schemaV2;