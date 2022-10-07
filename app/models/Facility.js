import realm from '../db/schema';
import facilities from '../db/json/facilities.json';

const MODEL = 'Facility';

const Facility = (() => {
  return {
    seedData,
    getAll,
    findByUuid,
    findByServiceUuid,
    findByName,
  }

  function seedData() {
    realm.write(() => {
      facilities.map((facility) => {
        if (!findByUuid(facility.uuid)) {
          realm.create(MODEL, {...facility, working_days: JSON.stringify(facility.working_days)});
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

  function findByServiceUuid(serviceUuid) {
    return realm.objects(MODEL).filtered(`ANY service_uuids = '${serviceUuid}'`)
  }

  function findByName(name) {
    return realm.objects(MODEL).filtered(`name CONTAINS[c] '${name}'`);
  }
})();

export default Facility;