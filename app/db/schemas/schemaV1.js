import schemaUtil from '../../utils/schema_util';

const schemaV1 = {
  schema: schemaUtil.getSchemas([]),
  schemaVersion: 1,
  migration: (oldRealm, newRealm) => {}
};

export default schemaV1;