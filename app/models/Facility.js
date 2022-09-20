import realm from '../db/schema';
import facilities from '../db/json/facilities';

const MODEL = 'Facility';

const Facility = (() => {
  return {
    seedData,
    getAll,
    findByUuid,
  }

  function seedData() {
    realm.write(() => {
      facilities.map((facility) => {
        if (!findByUuid(facility.uuid)) {
          realm.create(MODEL, facility);
        }
      });
    })
  }

  function getAll() {
    return realm.objects(MODEL);
  }

  function findByUuid(uuid) {
    return realm.objects(MODEL).filtered(`uuid = '${uuid}'`)[0];
  }
})();

export default Facility;