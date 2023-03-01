import schemaHelper from '../../helpers/schema_helper';
import Category from '../migrations/v2/category';
import Facility from '../migrations/v5/facility';
import Tag from '../migrations/v5/tag';
import {schemaNames} from '../../constants/schema_constant';

const changedSchemas = [
  { label: schemaNames[1], data: Category },
  { label: schemaNames[3], data: Facility },
  { label: schemaNames[9], data: Tag }
];

const schemaV6 = {
  schema: schemaHelper.getSchemas(changedSchemas),
  schemaVersion: 6,
  onMigration: (oldRealm, newRealm) => {
    if (oldRealm.schemaVersion < 6) {
      newRealm.deleteModel('Facility');
      newRealm.deleteModal('Tag');
    }
  },
}

export default schemaV6;