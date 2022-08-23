import realm from '../db/schema';

const MODEL = 'SchemaSample';

const SchemaSample = (() => {
  return {
    find,
    create,
  }

  function find(id) {
    return realm.objectForPrimaryKey(MODEL, id);
  }

  function create(data) {
    realm.write(() => {
      realm.create(MODEL, data);
    });
  }
})();

export default SchemaSample;