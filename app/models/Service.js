import realm from '../db/schema';
import services from '../db/json/services.json';

const MODEL = 'Service';

const Service = (() => {
  return {
    seedData,
    getAll,
    findByUuid,
    findByName,
  }

  function seedData() {
    realm.write(() => {
      services.map((service) => {
        if (!findByUuid(service.uuid)) {
          realm.create(MODEL, service);
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

  function findByName(name) {
    return realm.objects(MODEL).filtered(`name CONTAINS[c] '${name}'`);
  }
})();

export default Service;