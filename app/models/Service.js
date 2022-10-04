import realm from '../db/schema';
import services from '../db/json/services';

const MODEL = 'Service';

const Service = (() => {
  return {
    seedData,
    getAll,
    findByUuid,
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
})();

export default Service;